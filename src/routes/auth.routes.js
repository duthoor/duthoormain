import { Router } from 'express';

import { getViewsFilePath } from '../lib/file-path.js';
import { makePostEndPoint } from '../lib/create-route-handler.js';
import { z } from 'zod';
import { errorResponse, successResponse } from '../lib/response-helpers.js';
import { prismaInstance } from '../lib/prisma-instance.js';
import bcrypt from 'bcrypt';
import { randomInt, randomBytes } from 'crypto';
import { EmailService } from '../service/email.js';
import { postUserRegistration } from '../lib/post-user-registration.js';

export const AuthRouter = Router();

/**
 * @description Auth GET routes
 * @type {Record<string, { filePath: string }>}
 */
const GET_ROUTES = {
  '/login': {
    filePath: getViewsFilePath('/auth/login'),
  },
  '/register': {
    filePath: getViewsFilePath('/auth/register'),
  },
  '/otp-verification': {
    filePath: getViewsFilePath('/auth/otp-verification'),
  },
  '/forgot-password': {
    filePath: getViewsFilePath('/auth/forgot-password'),
  },
  '/reset-password': {
    filePath: getViewsFilePath('/auth/reset-password'),
  },
};

Object.keys(GET_ROUTES).forEach((route) => {
  AuthRouter.get(route, (req, res) => {
    const { filePath } = GET_ROUTES[route];
    res.sendFile(filePath);
  });
});

AuthRouter.post(
  '/register',
  makePostEndPoint(
    z.object({
      fullName: z.string().min(1, { message: 'Full name is required' }),
      email: z.string().email({ message: 'Invalid email address' }),
      idNumber: z.string().min(1, { message: 'ID number is required' }),
      password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
      phoneNumber: z
        .string()
        .min(1, { message: 'Phone number is required' })
        .regex(
          /^\+966[0-9]{8,9}$/, // Saudi phone number regex
          { message: 'Invalid phone number format. Must be in the format +966XXXXXXXXX' }
        ),
    }),
    async (request, response) => {
      try {
        const [emailExists, idNumberExists] = await Promise.all([
          prismaInstance.user.findUnique({
            where: {
              email: request.body.email,
            },
          }),
          prismaInstance.user.findUnique({
            where: {
              cnic: request.body.idNumber,
            },
          }),
        ]);

        if (emailExists) {
          return errorResponse({
            res: response,
            type: 'VALIDATION_ERROR',
            message: 'Email already exists',
          });
        }

        if (idNumberExists) {
          return errorResponse({
            res: response,
            type: 'VALIDATION_ERROR',
            message: 'ID number already exists',
          });
        }

        const hashedPassword = await bcrypt.hash(request.body.password, 10);

        const user = await prismaInstance.user.create({
          data: {
            name: request.body.fullName,
            email: request.body.email,
            cnic: request.body.idNumber,
            password: hashedPassword,
            phone: request.body.phoneNumber,
          },
        });

        await postUserRegistration({ userEmail: request.body.email, userId: user.id });

        return successResponse({
          res: response,
          message: 'User registered successfully',
          data: user,
        });
      } catch (error) {
        console.error('Error registering user:', error);
        return errorResponse({
          res: response,
          type: 'INTERNAL_SERVER_ERROR',
          message: 'An error occurred while registering the user',
        });
      }
    }
  )
);

AuthRouter.post(
  '/login',
  makePostEndPoint(
    z.object({
      email: z.string().email({ message: 'Invalid email address' }),
      password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
    }),
    async (request, response) => {
      try {
        const user = await prismaInstance.user.findUnique({
          where: {
            email: request.body.email,
          },
        });

        if (!user) {
          return errorResponse({
            res: response,
            type: 'VALIDATION_ERROR',
            message: 'Invalid email or password',
          });
        }

        const isPasswordValid = await bcrypt.compare(request.body.password, user.password);

        if (!isPasswordValid) {
          return errorResponse({
            res: response,
            type: 'VALIDATION_ERROR',
            message: 'Invalid email or password',
          });
        }

        const otp = randomInt(100000, 999999).toString(); // Generate a 6-digit OTP

        await prismaInstance.user.update({
          where: {
            id: user.id,
          },
          data: {
            otp,
          },
        });

        EmailService.getInstance().sendOtpEmail({ name: user.name, email: user.email, otp: otp, userId: user.id });

        return successResponse({
          res: response,
          message: `OTP sent to your email. Please check your inbox. DEMO OTP: ${otp}`,
          data: { userId: user.id },
        });
      } catch (error) {
        console.error('Error logging in user:', error);
        return errorResponse({
          res: response,
          type: 'INTERNAL_SERVER_ERROR',
          message: 'An error occurred while logging in the user',
        });
      }
    }
  )
);

AuthRouter.post(
  '/otp-verification',
  makePostEndPoint(
    z.object({
      userId: z.string().min(1, { message: 'User Id is required' }),
      otp: z.string().length(6, { message: 'OTP must be 6 digits long' }),
    }),
    async (request, response) => {
      try {
        const user = await prismaInstance.user.findUnique({
          where: {
            id: request.body.userId,
          },
        });

        if (!user) {
          return errorResponse({
            res: response,
            type: 'VALIDATION_ERROR',
            message: 'Invalid user ID or OTP',
          });
        }

        if (user.otp !== request.body.otp) {
          return errorResponse({
            res: response,
            type: 'VALIDATION_ERROR',
            message: 'Invalid OTP',
          });
        }

        request.session.userId = user.id;

        const { password, otp, ...userData } = user; // Exclude sensitive data

        return successResponse({
          res: response,
          message: 'OTP verified successfully',
          data: { user: userData, redirectUrl: user.role === 'USER' ? '/users/dashboard' : '/admin/users' },
        });
      } catch (error) {
        console.error('Error verifying OTP:', error);
        return errorResponse({
          res: response,
          type: 'INTERNAL_SERVER_ERROR',
          message: 'An error occurred while verifying the OTP',
        });
      }
    }
  )
);

AuthRouter.post(
  '/forgot-password',
  makePostEndPoint(
    z.object({
      email: z.string().email({ message: 'Invalid email address' }),
    }),
    async (request, response) => {
      try {
        const user = await prismaInstance.user.findUnique({
          where: {
            email: request.body.email,
          },
        });

        if (!user) {
          return errorResponse({
            res: response,
            type: 'VALIDATION_ERROR',
            message: 'Email not found',
          });
        }

        const token = randomBytes(32).toString('hex');

        await prismaInstance.user.update({
          where: {
            id: user.id,
          },
          data: {
            resetToken: token,
          },
        });

        await EmailService.getInstance().sendResetPasswordEmail({
          name: user.name,
          email: user.email,
          token: token,
          userId: user.id,
        });

        return successResponse({
          res: response,
          message: 'OTP sent to your email',
          data: { userId: user.id },
        });
      } catch (error) {
        console.error('Error sending OTP for password reset:', error);
        return errorResponse({
          res: response,
          type: 'INTERNAL_SERVER_ERROR',
          message: 'An error occurred while sending the OTP for password reset',
        });
      }
    }
  )
);

AuthRouter.post(
  '/reset-password',
  makePostEndPoint(
    z.object({
      userId: z.string().min(1, { message: 'User Id is required' }),
      token: z.string().min(1, { message: 'Token is required' }),
      password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
    }),
    async (request, response) => {
      try {
        const user = await prismaInstance.user.findUnique({
          where: {
            id: request.body.userId,
          },
        });

        if (!user) {
          return errorResponse({
            res: response,
            type: 'VALIDATION_ERROR',
            message: 'Invalid user ID or token',
          });
        }

        const matched = user.id === request.body.userId && user.resetToken === request.body.token;
        if (!matched) {
          return errorResponse({
            res: response,
            type: 'VALIDATION_ERROR',
            message: 'Invalid token or user ID',
          });
        }

        const hashedPassword = await bcrypt.hash(request.body.password, 10);

        await prismaInstance.user.update({
          where: {
            id: user.id,
          },
          data: {
            password: hashedPassword,
            resetToken: null,
          },
        });

        return successResponse({
          res: response,
          message: 'Password reset successfully',
          data: { userId: user.id },
        });
      } catch (error) {
        console.error('Error resetting password:', error);
        return errorResponse({
          res: response,
          type: 'INTERNAL_SERVER_ERROR',
          message: 'An error occurred while resetting the password',
        });
      }
    }
  )
);

AuthRouter.post('/logout', async (request, response) => {
  await new Promise((resolve, reject) => {
    request.session.destroy((error) => {
      if (error) {
        reject(error);
      } else {
        resolve('Logout Successful');
      }
    });
  });

  successResponse({ res: response, message: 'Logout successful', data: {} });
});
