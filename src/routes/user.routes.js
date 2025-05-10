import { Router } from 'express';

import { getViewsFilePath } from '../lib/file-path.js';
import { errorResponse, successResponse } from '../lib/response-helpers.js';
import { checkAuth } from '../lib/check-auth.js';
import { getSpendingPageData } from '../queries/get-spending-page-data.js';
import { getSavingsPageData } from '../queries/get-savings-page-data.js';
import { getBalancePageData } from '../queries/get-balance-page-data.js';
import { getInvestmentPageData } from '../queries/get-investment-page-data.js';
import { getDashbaordPageData } from '../queries/get-dashboard-page-data.js';
import { getMyProfile } from '../queries/get-my-profile.js';
import { prismaInstance } from '../lib/prisma-instance.js';

export const UserRouter = Router();

/**
 * @description USER GET ROUTES
 * @type {Record<string, { filePath: string, role: import('../generated/prisma/index.js').Role }>}
 */
const GET_ROUTES = {
  '/dashboard': {
    filePath: getViewsFilePath('/user/dashboard'),
    role: 'USER',
  },
  '/investments': {
    filePath: getViewsFilePath('/user/investments'),
    role: 'USER',
  },
  '/balance': {
    filePath: getViewsFilePath('/user/balance'),
    role: 'USER',
  },
  '/savings': {
    filePath: getViewsFilePath('/user/savings'),
    role: 'USER',
  },
  '/spending': {
    filePath: getViewsFilePath('/user/spending'),
    role: 'USER',
  },
  '/profile': {
    filePath: getViewsFilePath('/user/profile'),
    role: 'USER',
  },
};

Object.entries(GET_ROUTES).forEach(([path, { filePath, role }]) => {
  UserRouter.get(path, async (request, response) => {
    const authResponse = await checkAuth(request, role);

    if (!authResponse.success) {
      response.redirect('/auth/login');

      return;
    }

    response.sendFile(filePath);
  });
});

UserRouter.get('/dashboard/data', async (request, response) => {
  const authResponse = await checkAuth(request, 'USER');

  if (!authResponse.success) {
    errorResponse({
      res: response,
      message: 'You are not authorized to view this page',
      type: 'UNAUTHORIZED',
    });

    return;
  }

  const dashboardPageData = await getDashbaordPageData(authResponse.user.id);

  if (!dashboardPageData) {
    errorResponse({
      res: response,
      message: 'User not found',
      type: 'NOT_FOUND',
    });

    return;
  }

  successResponse({
    res: response,
    message: 'User data retrieved successfully',

    data: {
      user: dashboardPageData.user,
      balance: dashboardPageData.checkingsAccountBalance,
      monthlyData: dashboardPageData.prevMonthChartData,
      categories: dashboardPageData.caegories,
      investments: dashboardPageData.investments,
      payables: dashboardPageData.payables,
    },
  });

  return;
});

UserRouter.get('/investments/data', async (request, response) => {
  try {
    const authResponse = await checkAuth(request, 'USER');

    if (!authResponse.success) {
      errorResponse({
        res: response,
        message: 'You are not authorized to view this page',
        type: 'UNAUTHORIZED',
      });

      return;
    }

    const investmentPageData = await getInvestmentPageData(authResponse.user.id);

    successResponse({
      res: response,
      message: 'Investment data retrieved successfully',
      data: {
        summary: investmentPageData.summary,
        accounts: investmentPageData.accounts,
      },
    });
  } catch (error) {
    errorResponse({
      res: response,
      message: 'Error retrieving investment data',
      type: 'INTERNAL_SERVER_ERROR',
    });
  }
});

UserRouter.get('/balance/data', async (request, response) => {
  try {
    const authResponse = await checkAuth(request, 'USER');

    if (!authResponse.success) {
      errorResponse({
        res: response,
        message: 'You are not authorized to view this page',
        type: 'UNAUTHORIZED',
      });

      return;
    }

    const balancePageData = await getBalancePageData(authResponse.user.id);

    successResponse({
      res: response,
      message: 'Balance data retrieved successfully',
      data: {
        accounts: balancePageData.accounts,

        totalBalance: balancePageData.totalBalance,
      },
    });

    return;
  } catch (error) {
    errorResponse({
      res: response,
      message: 'Error retrieving balance data',
      type: 'INTERNAL_SERVER_ERROR',
    });
  }
});

UserRouter.get('/savings/data', async (request, response) => {
  try {
    const authResponse = await checkAuth(request, 'USER');

    if (!authResponse.success) {
      errorResponse({
        res: response,
        message: 'You are not authorized to view this page',
        type: 'UNAUTHORIZED',
      });

      return;
    }

    const savingsPageData = await getSavingsPageData(authResponse.user.id);

    if (!savingsPageData) {
      errorResponse({
        res: response,
        type: 'NOT_FOUND',
        message: 'User not found',
      });

      return;
    }

    successResponse({
      res: response,
      message: 'Savings data retrieved successfully',
      data: {
        totalSavings: savingsPageData.totalSavings,
        banks: savingsPageData.banks,
        payables: savingsPageData.payables,
      },
    });

    return;
  } catch (error) {
    errorResponse({
      res: response,
      message: 'Error retrieving savings data',
      type: 'INTERNAL_SERVER_ERROR',
    });
  }
});

UserRouter.get('/spending/data', async (request, response) => {
  try {
    const authResponse = await checkAuth(request, 'USER');

    if (!authResponse.success) {
      errorResponse({
        res: response,
        message: 'You are not authorized to view this page',
        type: 'UNAUTHORIZED',
      });

      return;
    }

    const checkingsAccountData = await getSpendingPageData(authResponse.user.id);

    successResponse({
      res: response,
      message: 'Spending data retrieved successfully',
      data: {
        categories: checkingsAccountData.categories,
        allCategories: checkingsAccountData.allCategories,
        comparison: {
          difference: checkingsAccountData.prevMonthToThisMonthSpending,
        },
        monthlyHistory: checkingsAccountData.monthlyHistory,
        transactions: checkingsAccountData.transactions,
        banks: checkingsAccountData.checkingsAccountBanks,
      },
    });

    return;
  } catch (error) {
    errorResponse({
      res: response,
      message: 'Error retrieving spending data',
      type: 'INTERNAL_SERVER_ERROR',
    });
  }
});

UserRouter.get('/profile/data', async (request, response) => {
  try {
    const authResponse = await checkAuth(request, 'USER');

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

UserRouter.delete('/profile', async (request, response) => {
  try {
    const authResponse = await checkAuth(request, 'USER');

    if (!authResponse.success) {
      errorResponse({
        res: response,
        message: 'You are not authorized to view this page',
        type: 'UNAUTHORIZED',
      });

      return;
    }

    await prismaInstance.user.delete({
      where: {
        id: authResponse.user.id,
      },
    });

    await new Promise((resolve, reject) => {
      request.session.destroy((error) => {
        if (error) {
          reject(error);
        } else {
          resolve('Session destroyed successfully');
        }
      });
    });

    successResponse({
      res: response,
      message: 'Profile deleted successfully',
      data: { id: authResponse.user.id },
    });
  } catch (error) {
    errorResponse({
      res: response,
      message: 'Error deleting profile',
      type: 'INTERNAL_SERVER_ERROR',
    });
  }
});
