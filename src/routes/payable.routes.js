import { Router } from 'express';
import { errorResponse, successResponse } from '../lib/response-helpers.js';
import { prismaInstance } from '../lib/prisma-instance.js';
import { checkAuth } from '../lib/check-auth.js';
import { makePostEndPoint } from '../lib/create-route-handler.js';

export const PayableRouter = Router();

import { z } from 'zod';

PayableRouter.post(
  '/',
  makePostEndPoint(
    z.object({
      name: z.string(),
      total: z.number().positive(),
      priority: z.number().int().positive(),
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

        const { name, total, priority } = request.body;

        const newPayable = await prismaInstance.payables.create({
          data: {
            title: name,
            total: total,
            priority: priority,
            userId: authResponse.user.id,
          },
        });

        successResponse({
          res: response,
          message: 'Payable created successfully',
          data: newPayable,
        });
      } catch (error) {
        errorResponse({
          res: response,
          type: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to create payable',
        });
      }
    }
  )
);

PayableRouter.delete('/:id', async (request, response) => {
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

    const payableId = request.params.id;

    await prismaInstance.payables.delete({
      where: { id: Number(payableId), userId: authResponse.user.id },
    });

    successResponse({ res: response, message: 'Payable deleted!', data: { payableId } });

    return;
  } catch (error) {
    errorResponse({
      res: response,
      type: 'INTERNAL_SERVER_ERROR',
      message: 'Failed to delete payable',
    });
  }
});
