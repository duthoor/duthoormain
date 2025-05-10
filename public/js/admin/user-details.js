import { apiClient } from '../api-client.js';
import { ChartFactory } from '../chart-factory.js';

document.addEventListener('DOMContentLoaded', () => {
  const loadingState = document.querySelector('.loading-state');
  const errorState = document.querySelector('.error-state');
  const successContent = document.querySelector('.success-content');
  const errorMessage = document.querySelector('.error-message');
  const retryBtn = document.querySelector('.retry-btn');
  const userName = document.getElementById('user-name');
  const userEmail = document.getElementById('user-email');
  const totalBalanceEl = document.getElementById('total-balance');
  const totalPayablesEl = document.getElementById('total-payables');
  const totalSavingEl = document.getElementById('total-savings');
  const banksContainer = document.getElementById('banks-container');
  const payablesTable = document.getElementById('payables-table').querySelector('tbody');
  const transactionsTable = document.getElementById('transactions-table').querySelector('tbody');
  const bankFilter = document.getElementById('bank-filter');
  const searchTransactions = document.getElementById('search-transactions');

  let financialData = null;
  let allTransactions = [];

  // Fetch financial data
  const fetchFinancialData = async () => {
    // read user id from search params
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('id');
    if (!userId) {
      showError('User ID is missing in the URL.');
      return;
    }

    try {
      showLoading();
      const { data, error } = await apiClient(`/admin/users/${userId}/data`);

      if (error) {
        showError(error.message);
        return;
      }

      financialData = data;
      allTransactions = data.transactions;
      renderFinancialData(data);
      showSuccess();
    } catch (err) {
      showError('Failed to load financial data. Please try again.');
    }
  };

  // Render all financial data
  const renderFinancialData = (data) => {
    // User profile
    userName.textContent = data.userProfile.name;
    userEmail.textContent = data.userProfile.email;

    // Calculate totals
    const totalBalance = calculateTotalBalance(data.banks);
    const totalPayables = calculateTotalPayables(data.payables);
    const totalSavings = data.banks.reduce((total, bank) => {
      return total + (bank.savingsAccount ? bank.savingsAccount.balance : 0);
    }, 0);

    // Update summary cards
    totalBalanceEl.innerHTML = `${totalBalance.toLocaleString()} <saudi-riyal-image></saudi-riyal-image>`;
    totalPayablesEl.innerHTML = `${totalPayables.toLocaleString()} <saudi-riyal-image></saudi-riyal-image>`;
    totalSavingEl.innerHTML = `${totalSavings.toLocaleString()} <saudi-riyal-image></saudi-riyal-image>`;

    // Render banks
    renderBanks(data.banks);

    // Render payables
    renderPayables(data.payables);

    // Render transactions
    renderTransactions(data.transactions);

    // Initialize charts
    initializeCharts(data.categories, data.prevMonthData);

    // Populate bank filter
    populateBankFilter(data.banks);
  };

  // Calculate total balance across all banks and accounts
  const calculateTotalBalance = (banks) => {
    return banks.reduce((total, bank) => {
      let bankTotal = 0;
      if (bank.checkingsAccount) bankTotal += bank.checkingsAccount.balance;
      return total + bankTotal;
    }, 0);
  };

  // Calculate total payables
  const calculateTotalPayables = (payables) => {
    return payables.reduce((total, payable) => total + payable.total, 0);
  };

  // Render banks section
  const renderBanks = (banks) => {
    banksContainer.innerHTML = '';

    banks.forEach((bank) => {
      const bankCard = document.createElement('div');
      bankCard.className = 'bank-card';

      let accountsHTML = '';
      let accountsCount = 0;

      if (bank.savingsAccount) {
        accountsHTML += `
          <div class="account-card">
            <h4>Savings Account</h4>
            <p class="account-balance">${bank.savingsAccount.balance.toLocaleString()} <saudi-riyal-image></saudi-riyal-image></p>
          </div>
        `;
        accountsCount++;
      }

      if (bank.checkingsAccount) {
        accountsHTML += `
          <div class="account-card">
            <h4>Checking Account</h4>
            <p class="account-balance">${bank.checkingsAccount.balance.toLocaleString()} <saudi-riyal-image></saudi-riyal-image></p>
          </div>
        `;
        accountsCount++;
      }

      if (bank.investmentsAccount) {
        const profitClass = bank.investmentsAccount.profitLoss >= 0 ? 'profit-positive' : 'profit-negative';
        accountsHTML += `
          <div class="account-card">
            <h4>Investment Account</h4>
            <p class="account-balance">${bank.investmentsAccount.portfolio.toLocaleString()} <saudi-riyal-image></saudi-riyal-image></p>
            <div class="investment-details">
              <span class="${profitClass}">P/L: ${
          bank.investmentsAccount.profitLoss >= 0 ? '+' : ''
        }${bank.investmentsAccount.profitLoss.toLocaleString()} <saudi-riyal-image></saudi-riyal-image></span>
              <span>Cash: ${bank.investmentsAccount.cashBalance.toLocaleString()} <saudi-riyal-image></saudi-riyal-image></span>
            </div>
          </div>
        `;
        accountsCount++;
      }

      bankCard.innerHTML = `
        <div class="bank-header">
          <img src="${bank.logo}" alt="${bank.name} logo" class="bank-logo">
          <div>
            <h3 class="bank-name">${bank.name}</h3>
            <p class="bank-description">${bank.shortDescription}</p>
          </div>
        </div>
        <div class="account-types">
          ${accountsHTML}
        </div>
      `;

      banksContainer.appendChild(bankCard);
    });
  };

  // Render payables
  const renderPayables = (payables) => {
    payablesTable.innerHTML = '';

    if (payables.length === 0) {
      payablesTable.innerHTML = `
        <tr>
          <td colspan="3" class="no-data">No payables found</td>
        </tr>
      `;
      return;
    }

    payables.forEach((payable) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${payable.title}</td>
        <td>${payable.total.toLocaleString()} <saudi-riyal-image></saudi-riyal-image></td>
        <td>${payable.priority}</td>
      `;
      payablesTable.appendChild(row);
    });
  };

  // Render transactions
  const renderTransactions = (transactions) => {
    transactionsTable.innerHTML = '';

    if (transactions.length === 0) {
      transactionsTable.innerHTML = `
        <tr>
          <td colspan="5" class="no-data">No transactions found</td>
        </tr>
      `;
      return;
    }

    // Sort by date (newest first)
    const sortedTransactions = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));

    sortedTransactions.forEach((transaction) => {
      const bank = financialData.banks.find((b) => b.id === transaction.bankId);
      const bankName = bank ? bank.name : 'Unknown Bank';
      const date = new Date(transaction.date).toLocaleDateString();

      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${date}</td>
        <td>${transaction.recipient}</td>
        <td>${transaction.amount.toLocaleString()} <saudi-riyal-image></saudi-riyal-image></td>
        <td>${transaction.category}</td>
        <td>${bankName}</td>
      `;
      transactionsTable.appendChild(row);
    });
  };

  // Initialize charts
  const initializeCharts = (categories, history) => {
    // Spending by category pie chart
    ChartFactory.createPieChart('spendingChart', {
      labels: categories.map((c) => c.name),
      values: categories.map((c) => c.amount),
    });

    // Monthly history bar chart
    ChartFactory.createBarChart('monthlyHistoryChart', {
      labels: history.map((h) => h.label),
      values: history.map((h) => h.value),
      currentIndex: new Date().getMonth(),
    });
  };

  // Populate bank filter
  const populateBankFilter = (banks) => {
    banks.forEach((bank) => {
      const option = document.createElement('option');
      option.value = bank.id;
      option.textContent = bank.name;
      bankFilter.appendChild(option);
    });
  };

  // Filter transactions
  const filterTransactions = () => {
    const bankId = bankFilter.value;
    const searchTerm = searchTransactions.value.toLowerCase();

    let filtered = allTransactions;

    // Filter by bank
    if (bankId !== 'all') {
      filtered = filtered.filter((t) => t.bankId === parseInt(bankId));
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (t) => t.recipient.toLowerCase().includes(searchTerm) || t.category.toLowerCase().includes(searchTerm)
      );
    }

    renderTransactions(filtered);
  };

  // Event listeners
  bankFilter.addEventListener('change', filterTransactions);
  searchTransactions.addEventListener('input', filterTransactions);
  retryBtn.addEventListener('click', fetchFinancialData);

  // UI state functions
  const showLoading = () => {
    loadingState.classList.remove('hidden');
    errorState.classList.add('hidden');
    successContent.classList.add('hidden');
  };

  const showError = (message) => {
    errorMessage.textContent = message;
    loadingState.classList.add('hidden');
    errorState.classList.remove('hidden');
    successContent.classList.add('hidden');
  };

  const showSuccess = () => {
    loadingState.classList.add('hidden');
    errorState.classList.add('hidden');
    successContent.classList.remove('hidden');
  };

  // Initialize
  fetchFinancialData();
});
