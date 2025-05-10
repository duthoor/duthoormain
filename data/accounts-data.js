/**
 * Represents a user account with multiple bank accounts.
 * @typedef {Object} Account
 * @property {string} email - The email address associated with the account.
 * @property {BankAccount[]} bankAccounts - List of bank accounts linked to the user.
 */

/**
 * Represents a bank account with investment, savings, and checkings accounts.
 * @typedef {Object} BankAccount
 * @property {number} bankId - Unique identifier for the bank.
 * @property {string} accountNumber - The account number.
 * @property {InvestmentAccount} investmentAccount - Investment account details.
 * @property {SavingsAccount} savingsAccount - Savings account details.
 * @property {CheckingsAccount} checkingsAccount - Checkings account details.
 */

/**
 * Represents an investment account.
 * @typedef {Object} InvestmentAccount
 * @property {number} portfolio - The total value of the investment portfolio.
 * @property {number} profitLoss - The profit or loss of the investment account.
 * @property {number} cashBalance - The cash balance in the investment account.
 */

/**
 * Represents a savings account.
 * @typedef {Object} SavingsAccount
 * @property {number} balance - The balance in the savings account.
 */

/**
 * Represents a checkings account.
 * @typedef {Object} CheckingsAccount
 * @property {number} balance - The balance in the checkings account.
 * @property {Transaction[]} transactions - List of transactions for the current month.
 * @property {MonthlyTransactionSummary[]} prevMonthsTransactionsSummary - Summary of transactions for previous months.
 */

/**
 * Represents a single transaction.
 * @typedef {Object} Transaction
 * @property {number} amount - The transaction amount.
 * @property {string} date - The date of the transaction (YYYY-MM-DD).
 * @property {string} recipient - The recipient or merchant of the transaction.
 */

/**
 * Represents a summary of transactions for a specific month.
 * @typedef {Object} MonthlyTransactionSummary
 * @property {number} month - The month number (1-12).
 * @property {number} amount - The total transaction amount for the month.
 */

/**@type {Account} */
const account1 = {
  email: 'janaalessa2012@hotmail.com',
  bankAccounts: [
    {
      bankId: 1,
      accountNumber: '112233',
      investmentAccount: {
        portfolio: 2000,
        profitLoss: -200,
        cashBalance: 320,
      },
      savingsAccount: {
        balance: 15000,
      },
      checkingsAccount: {
        balance: 2300,
        transactions: [
          { amount: 20, date: '2025-04-20', recipient: 'Uber' },
          { amount: 43, date: '2025-04-16', recipient: 'Jahez' },
          { amount: 89, date: '2025-04-20', recipient: 'Tamimi' },
          { amount: 910, date: '2025-04-20', recipient: 'SACO' },
          { amount: 210, date: '2025-04-12', recipient: 'SEPHORA' },
          { amount: 200, date: '2025-04-1', recipient: 'STC Pay' },
        ],
        prevMonthsTransactionsSummary: [
          { month: 1, amount: 3000 },
          { month: 2, amount: 2400 },
          { month: 3, amount: 2100 },
          { month: 4, amount: 1472 },
        ],
      },
    },
    {
      bankId: 2,
      accountNumber: '332211',
      investmentAccount: {
        portfolio: 15000,
        profitLoss: 2000,
        cashBalance: 900,
      },
      savingsAccount: {
        balance: 30000,
      },
      checkingsAccount: {
        balance: 4900,
        transactions: [
          { amount: 350, date: '2025-04-11', recipient: 'Amazon' },
          { amount: 10, date: '2025-04-07', recipient: 'Shefa' },
          { amount: 90, date: '2025-04-06', recipient: 'West Elm' },
          { amount: 74, date: '2025-04-24', recipient: 'SACO' },
          { amount: 42, date: '2025-04-15', recipient: 'Tamimi' },
          { amount: 300, date: '2025-04-09', recipient: 'STC Pay' },
        ],
        prevMonthsTransactionsSummary: [
          { month: 1, amount: 1000 },
          { month: 2, amount: 300 },
          { month: 3, amount: 980 },
          { month: 4, amount: 866 },
        ],
      },
    },
    {
      bankId: 3,
      accountNumber: '221133',
      investmentAccount: {
        portfolio: 6000,
        profitLoss: 800,
        cashBalance: 230,
      },
      savingsAccount: {
        balance: 4500,
      },
      checkingsAccount: {
        balance: 980,
        transactions: [
          { amount: 30, date: '2025-04-18', recipient: 'STC Pay' },
          { amount: 54, date: '2025-04-08', recipient: 'HungerSta' },
          { amount: 98, date: '2025-04-01', recipient: 'Danube' },
          { amount: 102, date: '2025-04-22', recipient: 'Amazon' },
          { amount: 989, date: '2025-04-23', recipient: 'Saudia' },
        ],
        prevMonthsTransactionsSummary: [
          { month: 1, amount: 340 },
          { month: 2, amount: 760 },
          { month: 3, amount: 1031 },
          { month: 4, amount: 1273 },
        ],
      },
    },
  ],
};

/**@type {Account} */
const account2 = {
  email: 's88alhamed@gmail.com',
  bankAccounts: [
    {
      bankId: 4,
      accountNumber: '556677',
      investmentAccount: {
        portfolio: 2300,
        profitLoss: -300,
        cashBalance: 500,
      },
      savingsAccount: {
        balance: 10000,
      },
      checkingsAccount: {
        balance: 4000,
        transactions: [
          { amount: 500, date: '2025-04-09', recipient: 'Zara' },
          { amount: 30, date: '2025-04-12', recipient: 'Careem' },
          { amount: 75, date: '2025-04-15', recipient: 'Macdonalds' },
          { amount: 300, date: '2025-04-22', recipient: 'Ebay' },
          { amount: 250, date: '2025-04-01', recipient: 'H&M' },
          { amount: 4000, date: '2025-04-26', recipient: 'Booking.com' },
        ],
        prevMonthsTransactionsSummary: [
          { month: 1, amount: 4000 },
          { month: 2, amount: 1250 },
          { month: 3, amount: 3100 },
          { month: 4, amount: 8350 },
        ],
      },
    },
    {
      bankId: 5,
      accountNumber: '101011',
      investmentAccount: {
        portfolio: 20000,
        profitLoss: -1500,
        cashBalance: 600,
      },
      savingsAccount: {
        balance: 25000,
      },
      checkingsAccount: {
        balance: 3500,
        transactions: [
          { amount: 230, date: '2025-04-08', recipient: 'AlNahdi Pharmacy' },
          { amount: 50, date: '2025-04-30', recipient: 'Virgin Megastore' },
          { amount: 89, date: '2025-04-16', recipient: 'Baskin Robbins' },
          { amount: 27, date: '2025-04-05', recipient: 'Dunkin Dougnuts' },
          { amount: 300, date: '2025-04-13', recipient: 'Shein' },
          { amount: 1000, date: '2025-04-27', recipient: 'Flynas' },
        ],
        prevMonthsTransactionsSummary: [
          { month: 1, amount: 900 },
          { month: 2, amount: 500 },
          { month: 3, amount: 1000 },
          { month: 4, amount: 2400 },
        ],
      },
    },
    {
      bankId: 6,
      accountNumber: '667788',
      investmentAccount: {
        portfolio: 9000,
        profitLoss: -400,
        cashBalance: 800,
      },
      savingsAccount: {
        balance: 9000,
      },
      checkingsAccount: {
        balance: 550,
        transactions: [
          { amount: 20, date: '2025-04-13', recipient: 'Riyadh Metro' },
          { amount: 27, date: '2025-04-17', recipient: 'Noon' },
          { amount: 200, date: '2025-04-01', recipient: 'Extra' },
          { amount: 30, date: '2025-04-26', recipient: 'Carrefour' },
          { amount: 100, date: '2025-04-19', recipient: 'Pink Berry' },
        ],
        prevMonthsTransactionsSummary: [
          { month: 1, amount: 200 },
          { month: 2, amount: 689 },
          { month: 3, amount: 2500 },
          { month: 4, amount: 3389 },
        ],
      },
    },
  ],
};

/**@type {Account} */
const account3 = {
  email: 'revsuh14@gmail.com',
  bankAccounts: [
    {
      bankId: 5,
      accountNumber: '223344',
      investmentAccount: {
        portfolio: 5333,
        profitLoss: -374,
        cashBalance: 770,
      },
      savingsAccount: {
        balance: 1000,
      },
      checkingsAccount: {
        balance: 5855,
        transactions: [
          { amount: 90, date: '2025-04-20', recipient: 'The body shop' },
          { amount: 120, date: '2025-04-16', recipient: 'LuLu Hypermarket' },
          { amount: 155, date: '2025-04-20', recipient: 'Home Center' },
          { amount: 831, date: '2025-04-20', recipient: 'The cheesecake factory' },
          { amount: 992, date: '2025-04-12', recipient: 'Home Center' },
          { amount: 1231, date: '2025-04-11', recipient: 'STC Pay' },
        ],
        prevMonthsTransactionsSummary: [
          { month: 1, amount: 3388 },
          { month: 2, amount: 5933 },
          { month: 3, amount: 1300 },
          { month: 4, amount: 3419 },
        ],
      },
    },
    {
      bankId: 3,
      accountNumber: '445566',
      investmentAccount: {
        portfolio: 1232,
        profitLoss: -900,
        cashBalance: 357,
      },
      savingsAccount: {
        balance: 3500,
      },
      checkingsAccount: {
        balance: 5322,
        transactions: [
          { amount: 933, date: '2025-04-11', recipient: 'Xcite' },
          { amount: 354, date: '2025-04-07', recipient: 'LuLu Hypermarket' },
          { amount: 880, date: '2025-04-06', recipient: 'Tamimi' },
          { amount: 213, date: '2025-04-24', recipient: 'Al-Dawaa Pharmacies' },
          { amount: 732, date: '2025-04-15', recipient: 'Sephora' },
          { amount: 80, date: '2025-04-09', recipient: 'IKEA' },
        ],
        prevMonthsTransactionsSummary: [
          { month: 1, amount: 1000 },
          { month: 2, amount: 300 },
          { month: 3, amount: 980 },
          { month: 4, amount: 3192 },
        ],
      },
    },
  ],
};

/**@type {Account} */
const account4 = {
  email: 'dode2020@gmail.com',
  bankAccounts: [
    {
      bankId: 7,
      accountNumber: '223355',
      investmentAccount: {
        portfolio: 9023,
        profitLoss: -392,
        cashBalance: 423,
      },
      savingsAccount: {
        balance: 3400,
      },
      checkingsAccount: {
        balance: 346544,
        transactions: [
          { amount: 90, date: '2025-04-20', recipient: 'The body shop' },
          { amount: 120, date: '2025-04-16', recipient: "L'azurde" },
          { amount: 155, date: '2025-04-20', recipient: 'Home Center' },
          { amount: 831, date: '2025-04-20', recipient: 'SACO' },
          { amount: 992, date: '2025-04-12', recipient: 'Shein' },
          { amount: 1231, date: '2025-04-11', recipient: 'STC Pay' },
        ],
        prevMonthsTransactionsSummary: [
          { month: 1, amount: 3388 },
          { month: 2, amount: 5933 },
          { month: 3, amount: 1300 },
          { month: 4, amount: 3419 },
        ],
      },
    },
    {
      bankId: 8,
      accountNumber: '445533',
      investmentAccount: {
        portfolio: 2332,
        profitLoss: -737,
        cashBalance: 232,
      },
      savingsAccount: {
        balance: 900,
      },
      checkingsAccount: {
        balance: 4222,
        transactions: [
          { amount: 933, date: '2025-04-11', recipient: 'AlNahdi Pharmacy' },
          { amount: 354, date: '2025-04-07', recipient: 'Virgin Megastore' },
          { amount: 880, date: '2025-04-06', recipient: 'Baskin Robbins' },
          { amount: 213, date: '2025-04-24', recipient: 'Dunkin Doughnuts' },
          { amount: 732, date: '2025-04-15', recipient: 'Shein' },
          { amount: 80, date: '2025-04-09', recipient: 'Flynas' },
        ],
        prevMonthsTransactionsSummary: [
          { month: 1, amount: 1000 },
          { month: 2, amount: 300 },
          { month: 3, amount: 980 },
          { month: 4, amount: 3192 },
        ],
      },
    },
    {
      bankId: 9,
      accountNumber: '8899922',
      investmentAccount: {
        portfolio: 11220,
        profitLoss: -43,
        cashBalance: 3231,
      },
      savingsAccount: {
        balance: 1200,
      },
      checkingsAccount: {
        balance: 12455,
        transactions: [
          { amount: 90, date: '2025-04-20', recipient: 'Xcite' },
          { amount: 120, date: '2025-04-16', recipient: 'BinDawood' },
          { amount: 155, date: '2025-04-20', recipient: 'Tamimi' },
          { amount: 831, date: '2025-04-20', recipient: 'Al-Dawaa Pharmacies' },
          { amount: 992, date: '2025-04-12', recipient: 'Sephora' },
          { amount: 1231, date: '2025-04-11', recipient: 'IKEA' },
        ],
        prevMonthsTransactionsSummary: [
          { month: 1, amount: 3388 },
          { month: 2, amount: 5933 },
          { month: 3, amount: 1300 },
          { month: 4, amount: 3419 },
        ],
      },
    },
  ],
};

/**@type {Account} */
const account5 = {
  email: 'remy223@gmail.com',
  bankAccounts: [
    {
      bankId: 5,
      accountNumber: '223344',
      investmentAccount: {
        portfolio: 8999,
        profitLoss: -323,
        cashBalance: 1443,
      },
      savingsAccount: {
        balance: 3400,
      },
      checkingsAccount: {
        balance: 346544,
        transactions: [
          { amount: 90, date: '2025-04-20', recipient: 'Uber' },
          { amount: 120, date: '2025-04-16', recipient: 'Jahez' },
          { amount: 155, date: '2025-04-20', recipient: 'Tamimi' },
          { amount: 831, date: '2025-04-20', recipient: 'SACO' },
          { amount: 992, date: '2025-04-12', recipient: 'SEPHORA' },
          { amount: 1231, date: '2025-04-11', recipient: 'STC Pay' },
        ],
        prevMonthsTransactionsSummary: [
          { month: 1, amount: 3388 },
          { month: 2, amount: 5933 },
          { month: 3, amount: 1300 },
          { month: 4, amount: 3419 },
        ],
      },
    },
    {
      bankId: 4,
      accountNumber: '445552',
      investmentAccount: {
        portfolio: 14444,
        profitLoss: 14,
        cashBalance: 13333,
      },
      savingsAccount: {
        balance: 900,
      },
      checkingsAccount: {
        balance: 4321,
        transactions: [
          { amount: 20, date: '2025-04-11', recipient: 'AlNahdi Pharmacy' },
          { amount: 43, date: '2025-04-07', recipient: 'Virgin Megastore' },
          { amount: 89, date: '2025-04-06', recipient: 'Baskin Robbins' },
          { amount: 910, date: '2025-04-24', recipient: 'Dunkin Doughnuts' },
          { amount: 210, date: '2025-04-15', recipient: 'Shein' },
          { amount: 200, date: '2025-04-09', recipient: 'Flynas' },
        ],
        prevMonthsTransactionsSummary: [
          { month: 1, amount: 1000 },
          { month: 2, amount: 300 },
          { month: 3, amount: 980 },
          { month: 4, amount: 1472 },
        ],
      },
    },
  ],
};

/**@type {Account} */
const account6 = {
  email: 'bader221@gmail.com',
  bankAccounts: [
    {
      bankId: 1,
      accountNumber: '223312',
      investmentAccount: {
        portfolio: 23432,
        profitLoss: 425,
        cashBalance: 4243,
      },
      savingsAccount: {
        balance: 3311,
      },
      checkingsAccount: {
        balance: 346554,
        transactions: [
          { amount: 332, date: '2025-04-20', recipient: 'AlNahdi Pharmacy' },
          { amount: 545, date: '2025-04-16', recipient: 'Virgin Megastore' },
          { amount: 221, date: '2025-04-20', recipient: 'Baskin Robbins' },
          { amount: 251, date: '2025-04-20', recipient: 'Dunkin Doughnuts' },
          { amount: 331, date: '2025-04-12', recipient: 'STC Pay' },
          { amount: 3435, date: '2025-04-11', recipient: 'Flunas' },
        ],
        prevMonthsTransactionsSummary: [
          { month: 1, amount: 3388 },
          { month: 2, amount: 5933 },
          { month: 3, amount: 1300 },
          { month: 4, amount: 5115 },
        ],
      },
    },
    {
      bankId: 2,
      accountNumber: '552211',
      investmentAccount: {
        portfolio: 425,
        profitLoss: 4253,
        cashBalance: 234235,
      },
      savingsAccount: {
        balance: 334,
      },
      checkingsAccount: {
        balance: 4222,
        transactions: [
          { amount: 900, date: '2025-04-11', recipient: 'STC Pay' },
          { amount: 433, date: '2025-04-07', recipient: 'Hunger Sta' },
          { amount: 343, date: '2025-04-06', recipient: 'Danube' },
          { amount: 535, date: '2025-04-24', recipient: 'Amazon' },
          { amount: 543, date: '2025-04-15', recipient: 'Saudia' },
        ],
        prevMonthsTransactionsSummary: [
          { month: 1, amount: 1000 },
          { month: 2, amount: 300 },
          { month: 3, amount: 980 },
          { month: 4, amount: 2754 },
        ],
      },
    },
    {
      bankId: 3,
      accountNumber: '664422',
      investmentAccount: {
        portfolio: 5544,
        profitLoss: 234,
        cashBalance: 2342,
      },
      savingsAccount: {
        balance: 3440,
      },
      checkingsAccount: {
        balance: 12455,
        transactions: [
          { amount: 90, date: '2025-04-20', recipient: 'The body shop' },
          { amount: 120, date: '2025-04-16', recipient: 'Shein' },
          { amount: 155, date: '2025-04-20', recipient: 'Home center' },
          { amount: 831, date: '2025-04-20', recipient: 'SACO' },
          { amount: 992, date: '2025-04-12', recipient: 'Shein' },
          { amount: 1231, date: '2025-04-11', recipient: 'STC Pay' },
        ],
        prevMonthsTransactionsSummary: [],
      },
    },
  ],
};

/**@type {Account[]} */
export const accounts = [account1, account2, account3, account4, account5, account6];
