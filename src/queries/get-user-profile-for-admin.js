import { prismaInstance } from '../lib/prisma-instance.js';
import { monthNumToNameMap } from '../constants.js';

/** @param {string} userId */
export async function getUserProfileForAdmin(userId) {
  const rawData = await prismaInstance.user.findUnique({
    where: { id: userId },

    include: {
      userBanks: {
        include: {
          bank: true,
          investmentAccount: true,
          savingsAccount: true,
          checkingsAccount: {
            include: {
              transactions: true,
            },
          },
        },
      },
      Payables: true,
    },
  });

  if (!rawData) {
    return null;
  }

  // USER PROFILE
  const userProfile = {
    id: rawData.id,
    name: rawData.name,
    email: rawData.email,
    phone: rawData.phone,
    cnic: rawData.cnic,
  };

  // BANKS
  const banks = rawData.userBanks.map((userBank) => {
    return {
      id: userBank.bank.id,
      name: userBank.bank.name,
      logo: userBank.bank.logo,
      shortDescription: userBank.bank.shortDescription,

      savingsAccount: userBank.savingsAccount
        ? {
            balance: userBank.savingsAccount.balance,
          }
        : null,

      investmentsAccount: userBank.investmentAccount
        ? {
            portfolio: userBank.investmentAccount.portfolio,
            profitLoss: userBank.investmentAccount.profitLoss,
            cashBalance: userBank.investmentAccount.cashBalance,
          }
        : null,

      checkingsAccount: userBank.checkingsAccount
        ? {
            balance: userBank.checkingsAccount.balance,
          }
        : null,
    };
  });

  // PAYABLES
  const payables = rawData.Payables.map((payable) => {
    return {
      id: payable.id,
      title: payable.title,
      total: payable.total,
      priority: payable.priority,
    };
  });

  // TRANSACTIONS

  /** @type {Array<{id: number, amount: number, recipient: string, category: string, date: Date, bankId: number}>} */
  const transactions = [];

  /** @type {Record<string, number>} */
  const categoriesMap = {
    Retail: 0,
    Groceries: 0,
    Entertainment: 0,
    Travel: 0,
    Miscellaneous: 0,
  };
  for (const bank of rawData.userBanks) {
    const checkingsAccount = bank.checkingsAccount;

    if (!checkingsAccount) continue;

    const transactionsList = checkingsAccount.transactions;

    for (const transaction of transactionsList) {
      const transactionCategory =
        categoriesMap[transaction.category] !== undefined ? transaction.category : 'Miscellaneous';

      const transactionAmount = transaction.amount < 0 ? 0 : transaction.amount;

      transactions.push({
        id: transaction.id,
        amount: transactionAmount,
        recipient: transaction.description,
        category: transactionCategory,
        date: transaction.date,
        bankId: bank.bank.id,
      });

      categoriesMap[transactionCategory] += transactionAmount;
    }
  }

  const categoriesArray = Object.entries(categoriesMap).map(([name, amount]) => {
    return {
      name,
      amount,
    };
  });

  // PREVIOUS MONTH SPENDINGS.
  /** @type {Record<number, number>} */
  const monthlyHistoryMap = {};

  rawData.userBanks.forEach((bank) => {
    const prevMonthsTransactionsSummary = bank.checkingsAccount?.prevMonthsTransactionsSummary;
    if (!Array.isArray(prevMonthsTransactionsSummary)) return;

    prevMonthsTransactionsSummary.forEach((summary) => {
      //@ts-expect-error
      const month = summary.month;
      //@ts-expect-error
      const amount = summary.amount;

      if (monthlyHistoryMap[month]) {
        monthlyHistoryMap[month] += amount;
      } else {
        monthlyHistoryMap[month] = amount;
      }
    });
  });

  /** @type {Array<{label: string, value: number}>} */
  const prevMonthData = [];

  for (let i = 1; i <= 12; i++) {
    //@ts-expect-error
    const monthName = monthNumToNameMap[i];
    const monthValue = monthlyHistoryMap[i] || 0;
    if (monthValue > 0) {
      prevMonthData.push({
        label: monthName,
        value: monthValue,
      });
    }
  }

  return {
    userProfile,
    banks,
    payables,
    transactions,
    categories: categoriesArray,
    prevMonthData,
  };
}
