import { prismaInstance } from './prisma-instance.js';
import { accounts } from '../../data/accounts-data.js';

import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';

/**
 * @description This function creates user bank accounts in the database.
 * @param {Object} params - The parameters for the function.
 * @param {string} params.userEmail - The email of the user.
 * @param {string} params.userId - The ID of the user.
 */
export async function postUserRegistration({ userEmail, userId }) {
  try {
    let userAccount = accounts.find((account) => account.email === userEmail);

    const numberOfAccounts = getRandomInt(2, 3);

    const uniqueBankIds = new Set();

    if (!userAccount) {
      userAccount = {
        email: userEmail,
        bankAccounts: Array.from({ length: numberOfAccounts }).map(() => {
          let bankId = getRandomInt(1, 9);

          while (uniqueBankIds.has(bankId)) {
            bankId = getRandomInt(1, 9);
          }

          uniqueBankIds.add(bankId);

          return generateBankAccount(bankId);
        }),
      };
    }

    const userAccountWithCategorizedTransactions = await Promise.all(
      userAccount.bankAccounts.map(async (bankAccount) => {
        const categorizedTransactions = await categorizeTransactionsUsingAI(bankAccount.checkingsAccount.transactions);

        return {
          ...bankAccount,
          checkingsAccount: {
            ...bankAccount.checkingsAccount,
            transactions: categorizedTransactions,
          },
        };
      })
    );

    await prismaInstance.$transaction(
      userAccountWithCategorizedTransactions.map((bankAccount) => {
        return prismaInstance.userBank.create({
          data: {
            userId: userId,
            bankId: bankAccount.bankId,
            accountNumber: bankAccount.accountNumber,

            investmentAccount: {
              create: {
                portfolio: bankAccount.investmentAccount.portfolio,
                profitLoss: bankAccount.investmentAccount.profitLoss,
                cashBalance: bankAccount.investmentAccount.cashBalance,
              },
            },

            savingsAccount: {
              create: {
                balance: bankAccount.savingsAccount.balance,
              },
            },

            checkingsAccount: {
              create: {
                balance: bankAccount.checkingsAccount.balance,
                transactions: {
                  createMany: {
                    data: bankAccount.checkingsAccount.transactions.map((t) => {
                      return {
                        amount: t.amount,
                        category: t.category,
                        date: t.date.toISOString(),
                        description: t.recipient,
                      };
                    }),
                  },
                },
                prevMonthsTransactionsSummary: bankAccount.checkingsAccount.prevMonthsTransactionsSummary,
              },
            },
          },
        });
      })
    );
  } catch (error) {
    console.error('Error creating user bank accounts:', error);
  }
}

/**
 * @description Taking raw transactions and assigning them to categories using OpenAI
 * @typedef {"Retail" | "Groceries" | "Entertainment" | "Travel" | "Miscellaneous"} Category
 * @param {Array<{amount: number, date: string, recipient: string}>} transactions - The transactions to categorize.
 * @returns {Promise<Array<{amount: number, date: Date, recipient: string, category: Category}>>} - The categorized transactions.
 */
export async function categorizeTransactionsUsingAI(transactions) {
  const result = await generateObject({
    model: openai('gpt-4-turbo'),
    system: `You are a financial assistant. Categorize the transactions into one of the following categories: Retail, Groceries, Entertainment, Travel, Miscellaneous. The transactions are in the format: {amount: number, date: string, recipient: string}. The transactions has taken place in Saudia Arabia.`,
    prompt: `Categorize the following transactions:\n${JSON.stringify(transactions)}`,
    schema: z.object({
      transactions: z.array(
        z.object({
          amount: z.number(),
          date: z.string(),
          recipient: z.string(),
          category: z.enum(['Retail', 'Groceries', 'Entertainment', 'Travel', 'Miscellaneous']),
        })
      ),
    }),
  });

  return result.object.transactions.map((transaction) => ({
    ...transaction,
    date: new Date(transaction.date),
  }));
}

/**
 * @param {number} min
 * @param {number} max
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDateInApril2025() {
  const day = getRandomInt(1, 30);
  return `2025-04-${day.toString().padStart(2, '0')}`;
}

function getRandomDescription() {
  const descriptions = [
    'Uber',
    'Amazon',
    'Tamimi',
    'SACO',
    'STC Pay',
    'Hunger Sta',
    'Shefa',
    'Danube',
    'Saudia',
    'SEPHORA',
    'Jahez',
    'West Elm',
  ];
  return descriptions[getRandomInt(0, descriptions.length - 1)];
}

/** @param {number} count */
function generateRandomTransactions(count) {
  const transactions = [];
  for (let i = 0; i < count; i++) {
    transactions.push({
      amount: getRandomInt(10, 1000),
      date: getRandomDateInApril2025(),
      recipient: getRandomDescription(),
    });
  }
  return transactions;
}

function generatePrevMonthsSummary() {
  const summaries = [];
  for (let month = 1; month <= 4; month++) {
    summaries.push({
      month,
      amount: getRandomInt(300, 5000),
    });
  }
  return summaries;
}

/** @param {number} bankId */
function generateBankAccount(bankId) {
  return {
    bankId,
    accountNumber: getRandomInt(1000000000, 9999999999).toString(),
    investmentAccount: {
      portfolio: getRandomInt(1000, 20000),
      profitLoss: getRandomInt(-500, 5000),
      cashBalance: getRandomInt(100, 2000),
    },
    savingsAccount: {
      balance: getRandomInt(5000, 50000),
    },
    checkingsAccount: {
      balance: getRandomInt(500, 10000),
      transactions: generateRandomTransactions(getRandomInt(3, 8)),
      prevMonthsTransactionsSummary: generatePrevMonthsSummary(),
    },
  };
}
