import { prismaInstance } from '../lib/prisma-instance.js';
import { monthNumToNameMap } from '../constants.js';

/** @param {string} userId */
export async function getDashbaordPageData(userId) {
  const rawData = await prismaInstance.user.findUnique({
    where: { id: userId },

    select: {
      name: true,

      userBanks: {
        select: {
          bank: {
            select: {
              name: true,
              logo: true,
              id: true,
            },
          },
          savingsAccount: {
            select: {
              balance: true,
            },
          },

          investmentAccount: {
            select: {
              cashBalance: true,
              portfolio: true,
              profitLoss: true,
            },
          },

          checkingsAccount: {
            select: {
              balance: true,
              prevMonthsTransactionsSummary: true, // Array<{ month: number, amount: number }>
              transactions: {
                select: {
                  id: true,
                  amount: true,
                  description: true,
                  date: true,
                  category: true,
                },
              },
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

  // SAVINGS ACCOUNTS
  /** @type {Array<{name: string, logo: string, balance: number}>} */
  const savingAccounts = [];

  let totalSavings = 0;

  for (const userBank of rawData.userBanks) {
    const { bank, savingsAccount } = userBank;
    if (savingsAccount) {
      const { balance } = savingsAccount;
      totalSavings += balance;
      savingAccounts.push({
        name: bank.name,
        logo: bank.logo,
        balance,
      });
    }
  }

  // PAYABLES
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

  // INVESTMENT ACCOUNTS
  const investmentSummary = {
    totalPortfolio: 0,
    totalProfitLoss: 0,
    totalCash: 0,
  };

  /**@type {Array<{name: string, logo: string, portfolio: number, profitLoss: number, cash: number}>} */
  const accounts = [];

  for (const bank of rawData.userBanks) {
    const { bank: bankInfo, investmentAccount } = bank;

    if (investmentAccount) {
      const { cashBalance, portfolio, profitLoss } = investmentAccount;

      investmentSummary.totalPortfolio += portfolio;
      investmentSummary.totalProfitLoss += profitLoss;
      investmentSummary.totalCash += cashBalance;

      accounts.push({
        name: bankInfo.name,
        logo: bankInfo.logo,
        portfolio,
        profitLoss,
        cash: cashBalance,
      });
    }
  }

  // CHECKINGS ACCOUNTS
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

  const checkingsAccountBalance = rawData.userBanks.reduce((acc, current) => {
    return acc + (current.checkingsAccount ? current.checkingsAccount.balance : 0);
  }, 0);

  // PREVIOUS MONTHS TRANSACTIONS SUMMARY
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

  return {
    user: { name: rawData.name },
    savingAccounts,
    payables,
    investments: {
      summary: investmentSummary,
      accounts: accounts,
    },
    transactions,
    checkingsAccountBalance,
    caegories: categoriesArray,
    prevMonthChartData: {
      labels: prevMonthLabels,
      values: prevMonthValues,
    },
  };
}
