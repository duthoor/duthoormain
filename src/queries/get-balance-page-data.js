import { prismaInstance } from '../lib/prisma-instance.js';

/**@param {string} userId */
export async function getBalancePageData(userId) {
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
      checkingsAccount: {
        select: {
          balance: true,
        },
      },
    },
  });

  const accounts = rawData.map((account) => {
    return {
      name: account.bank.name,
      logo: account.bank.logo,
      balance: account.checkingsAccount?.balance || 0,
    };
  });

  const totalBalance = accounts.reduce((acc, account) => {
    return acc + account.balance;
  }, 0);

  return { accounts, totalBalance };
}
