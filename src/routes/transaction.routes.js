import { Router } from 'express';
import { errorResponse, successResponse } from '../lib/response-helpers.js';
import { prismaInstance } from '../lib/prisma-instance.js';
import { checkAuth } from '../lib/check-auth.js';
import { makeUpdateEndpoint } from '../lib/create-route-handler.js';
import { z } from 'zod';

export const TransactionRouter = Router();

TransactionRouter.patch(
  '/:id',
  makeUpdateEndpoint(
    z.object({
      category: z.string(),
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

        const transactionId = request.params.id;

        const transaction = await prismaInstance.transaction.findFirst({
          where: {
            id: Number(transactionId),
          },

          select: {
            checkingsAccount: {
              select: {
                userBank: {
                  select: {
                    userId: true,
                  },
                },
              },
            },
          },
        });

        if (!transaction) {
          return errorResponse({
            res: response,
            type: 'NOT_FOUND',
            message: 'Transaction not found',
          });
        }

        if (transaction.checkingsAccount.userBank?.userId !== authResponse.user.id) {
          return errorResponse({
            res: response,
            type: 'UNAUTHORIZED',
            message: 'You are not authorized to perform this action',
          });
        }

        const updatedTransaction = await prismaInstance.transaction.update({
          where: { id: Number(transactionId) },
          data: { category: request.body.category },
        });

        return successResponse({
          res: response,
          message: 'Transaction updated successfully',
          data: updatedTransaction,
        });
      } catch (error) {
        return errorResponse({
          res: response,
          type: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to update transaction',
        });
      }
    }
  )
);
