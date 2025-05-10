import { prismaInstance } from '../lib/prisma-instance.js';

/** @param {string} userId */
export async function getInvestmentPageData(userId) {
  const rawData = await prismaInstance.userBank.findMany({
    where: {
      userId: userId,
    },
    select: {
      bank: {
        select: {
          name: true,
          logo: true,
        },
      },
      investmentAccount: {
        select: {
          cashBalance: true,
          portfolio: true,
          profitLoss: true,
        },
      },
    },
  });

  const summary = {
    totalPortfolio: 0,
    totalProfitLoss: 0,
    totalCash: 0,
  };

  /**@type {Array<{name: string, logo: string, portfolio: number, profitLoss: number, cash: number}>} */
  const accounts = [];

  for (const bank of rawData) {
    const { bank: bankInfo, investmentAccount } = bank;

    if (investmentAccount) {
      const { cashBalance, portfolio, profitLoss } = investmentAccount;

      summary.totalPortfolio += portfolio;
      summary.totalProfitLoss += profitLoss;
      summary.totalCash += cashBalance;

      accounts.push({
        name: bankInfo.name,
        logo: bankInfo.logo,
        portfolio,
        profitLoss,
        cash: cashBalance,
      });
    }
  }

  return {
    accounts,
    summary,
  };
}
