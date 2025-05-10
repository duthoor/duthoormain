import { categories, monthNumToNameMap } from '../constants.js';
import { prismaInstance } from '../lib/prisma-instance.js';

/** @param {string} userId */
export async function getSpendingPageData(userId) {
  const rawData = await prismaInstance.userBank.findMany({
    where: { userId: userId },
    include: {
      bank: true,
      checkingsAccount: {
        include: {
          transactions: true,
        },
      },
    },
  });

  const checkingsAccountBanks = rawData.map((bank) => ({
    id: bank.bank.id,
    name: bank.bank.name,
    logo: bank.bank.logo,
    description: bank.bank.shortDescription,
    supportEmail: bank.bank.email,
    supportPhone: bank.bank.phone,
    balance: bank.checkingsAccount?.balance,
  }));

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

  for (const bank of rawData) {
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

  /** @type {Record<number, number>} */
  const monthlyHistoryMap = {};

  rawData.forEach((bank) => {
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

  /** @type {Array<string>} */
  const prevMonthLabels = [];

  /** @type {Array<number>} */
  const prevMonthValues = [];

  for (let i = 1; i <= 12; i++) {
    //@ts-expect-error
    const monthName = monthNumToNameMap[i];
    const monthValue = monthlyHistoryMap[i] || 0;
    if (monthValue > 0) {
      prevMonthLabels.push(monthName);
      prevMonthValues.push(monthValue);
    }
  }

  const prevMonthNumber = new Date().getMonth();

  const prevMonthToThisMonthSpending =
    Object.values(categoriesMap).reduce((acc, amount) => acc + amount, 0) - (monthlyHistoryMap[prevMonthNumber] || 0);

  return {
    checkingsAccountBanks,
    transactions,
    categories: categoriesArray,
    monthlyHistory: {
      labels: prevMonthLabels,
      values: prevMonthValues,
    },
    allCategories: categories,
    prevMonthToThisMonthSpending,
  };
}
