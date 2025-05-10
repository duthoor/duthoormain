import { prismaInstance } from '../lib/prisma-instance.js';

/** @param {string} userId */
export async function getSavingsPageData(userId) {
  const rawData = await prismaInstance.user.findFirst({
    where: { id: userId },
    select: {
      userBanks: {
        select: {
          bank: {
            select: {
              name: true,
              logo: true,
            },
          },
          savingsAccount: {
            select: {
              balance: true,
            },
          },
        },
      },
      Payables: {
        select: {
          id: true,
          title: true,
          priority: true,
          total: true,
        },
      },
    },
  });

  if (!rawData) {
    return null;
  }

  const banks = rawData.userBanks
    .map((userBank) => {
      if (!userBank.savingsAccount) return;
      return {
        name: userBank.bank.name,
        logo: userBank.bank.logo,
        balance: userBank.savingsAccount.balance,
      };
    })
    .filter((item) => item !== undefined);

  const totalSavings = banks.reduce((acc, cur) => acc + cur.balance, 0);

  const payables = rawData.Payables.map((payable) => {
    const payoffAmount = (payable.priority * totalSavings) / 100; // priority is percentage (0 - 100%)
    return {
      id: payable.id,
      name: payable.title,
      priority: payable.priority,
      total: payable.total,
      payoffAmount: Math.min(payoffAmount, payable.total),
    };
  });

  return { banks, totalSavings, payables };
}
