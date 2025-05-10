import { Router } from 'express';

import { getViewsFilePath } from '../lib/file-path.js';
import { errorResponse, successResponse } from '../lib/response-helpers.js';
import { prismaInstance } from '../lib/prisma-instance.js';
import { checkAuth } from '../lib/check-auth.js';
import { getUserProfileForAdmin } from '../queries/get-user-profile-for-admin.js';
import { getMyProfile } from '../queries/get-my-profile.js';

export const AdminRouter = Router();

/**
 * @description Auth GET routes
 * @type {Record<string, { filePath: string, role: import('../generated/prisma/index.js').Role }>}
 */
const GET_ROUTES = {
  '/users': {
    filePath: getViewsFilePath('/admin/users'),
    role: 'ADMIN',
  },
  '/user-details': {
    filePath: getViewsFilePath('/admin/user-details'),
    role: 'ADMIN',
  },
  '/profile': {
    filePath: getViewsFilePath('/admin/profile'),
    role: 'ADMIN',
  },
  '/support': {
    filePath: getViewsFilePath('/admin/support'),
    role: 'ADMIN',
  },
};

Object.entries(GET_ROUTES).forEach(([path, { filePath, role }]) => {
  AdminRouter.get(path, async (request, response) => {
    const authResponse = await checkAuth(request, role);

    if (!authResponse.success) {
      response.redirect('/auth/login');

      return;
    }

    response.sendFile(filePath);
  });
});

AdminRouter.get('/users/data', async (request, response) => {
  try {
    const authResponse = await checkAuth(request, 'ADMIN');

    if (!authResponse.success) {
      errorResponse({ res: response, message: 'Unauthorized', type: 'UNAUTHORIZED' });

      return;
    }

    const users = await prismaInstance.user.findMany({
      where: {
        role: 'USER',
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        cnic: true,
        phone: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    successResponse({ res: response, message: 'Users fetched successfully', data: users });
  } catch (error) {
    errorResponse({ res: response, message: 'Error fetching users', type: 'INTERNAL_SERVER_ERROR' });
  }
});

AdminRouter.get('/users/:id/data', async (request, response) => {
  try {
    const authResponse = await checkAuth(request, 'ADMIN');
    const userId = request.params.id;

    if (!authResponse.success) {
      errorResponse({ res: response, message: 'Unauthorized', type: 'UNAUTHORIZED' });

      return;
    }

    const userData = await getUserProfileForAdmin(userId);

    if (!userData) {
      errorResponse({ res: response, message: 'User not found', type: 'NOT_FOUND' });

      return;
    }

    successResponse({ res: response, message: 'User fetched successfully', data: userData });
  } catch (error) {
    console.error('Error fetching user data:', error);
    errorResponse({ res: response, message: 'Error fetching user', type: 'INTERNAL_SERVER_ERROR' });
  }
});

AdminRouter.get('/profile/data', async (request, response) => {
  try {
    const authResponse = await checkAuth(request, 'ADMIN');

    if (!authResponse.success) {
      errorResponse({
        res: response,
        message: 'You are not authorized to view this page',
        type: 'UNAUTHORIZED',
      });

      return;
    }

    const myProfile = await getMyProfile(authResponse.user.id);

    if (!myProfile) {
      errorResponse({
        res: response,
        message: 'User not found',
        type: 'NOT_FOUND',
      });

      return;
    }

    successResponse({
      res: response,
      message: 'Profile data retrieved successfully',
      data: myProfile,
    });
  } catch (error) {
    errorResponse({
      res: response,
      message: 'Error retrieving profile data',
      type: 'INTERNAL_SERVER_ERROR',
    });
  }
});

AdminRouter.delete('/users/:id', async (request, response) => {
  try {
    const authResponse = await checkAuth(request, 'ADMIN');
    const userId = request.params.id;

    if (!authResponse.success) {
      errorResponse({ res: response, message: 'Unauthorized', type: 'UNAUTHORIZED' });

      return;
    }

    const user = await prismaInstance.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      errorResponse({ res: response, message: 'User not found', type: 'NOT_FOUND' });

      return;
    }

    await prismaInstance.user.delete({
      where: { id: userId },
    });

    successResponse({ res: response, message: 'User deleted successfully', data: user });
  } catch (error) {
    console.error('Error deleting user:', error);
    errorResponse({ res: response, message: 'Error deleting user', type: 'INTERNAL_SERVER_ERROR' });
  }
});
