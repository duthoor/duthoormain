import { Router } from 'express';
import { errorResponse, successResponse } from '../lib/response-helpers.js';
import { prismaInstance } from '../lib/prisma-instance.js';
import { checkAuth } from '../lib/check-auth.js';
import { makePostEndPoint } from '../lib/create-route-handler.js';

export const SupportRouter = Router();

import { z } from 'zod';

SupportRouter.post(
  '/',
  makePostEndPoint(
    z.object({
      message: z.string().min(1, 'Message is required').max(500, 'Message must be less than 500 characters'),
    }),

    async (request, response) => {
      try {
        const authResponse = await checkAuth(request, 'USER');

        if (!authResponse.success) {
          errorResponse({
            res: response,
            type: 'UNAUTHORIZED',
            message: 'You are not authorized to perform this action',
          });
          return;
        }

        const supportMessageRow = await prismaInstance.supportMessages.create({
          data: {
            message: request.body.message,
            userId: authResponse.user.id,
          },
        });

        successResponse({
          res: response,
          message: 'Message recorded',
          data: { id: supportMessageRow.id },
        });
      } catch (error) {
        errorResponse({
          res: response,
          type: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to record support message',
        });
      }
    }
  )
);

SupportRouter.get('/', async (request, response) => {
  try {
    const authResponse = await checkAuth(request, 'ADMIN');

    if (!authResponse.success) {
      errorResponse({
        res: response,
        type: 'UNAUTHORIZED',
        message: 'You are not authorized to perform this action',
      });
      return;
    }

    const supportMessags = await prismaInstance.supportMessages.findMany({
      select: {
        id: true,
        message: true,
        createdAt: true,
        user: { select: { name: true, email: true } },
      },
    });

    successResponse({
      res: response,
      message: 'Messages retrieved',
      data: supportMessags,
    });
  } catch (error) {
    errorResponse({
      res: response,
      type: 'INTERNAL_SERVER_ERROR',
      message: 'Failed to retrieve support messages',
    });
  }
});

SupportRouter.delete('/:id', async (request, response) => {
  try {
    const authResponse = await checkAuth(request, 'ADMIN');

    if (!authResponse.success) {
      errorResponse({
        res: response,
        type: 'UNAUTHORIZED',
        message: 'You are not authorized to perform this action',
      });
      return;
    }

    const supportId = request.params.id;

    await prismaInstance.supportMessages.delete({
      where: {
        id: Number(supportId),
      },
    });

    successResponse({ res: response, message: 'Message deleted!', data: { id: supportId } });

    return;
  } catch (error) {
    errorResponse({
      res: response,
      type: 'INTERNAL_SERVER_ERROR',
      message: 'Failed to delete support message',
    });
  }
});
