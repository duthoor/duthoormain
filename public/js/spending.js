import { apiClient } from './api-client.js';
import { ChartFactory } from './chart-factory.js';

// DOM Elements
const loadingState = document.querySelector('.loading-state');
const errorState = document.querySelector('.error-state');
const successContent = document.querySelector('.success-content');
const errorMessage = document.querySelector('.error-message');
const retryBtn = document.querySelector('.retry-btn');
const categoriesContainer = document.getElementById('categories-container');
const comparisonText = document.getElementById('monthly-comparison-text');
const comparisonAmount = document.getElementById('comparison-amount');
const comparisonDirection = document.getElementById('comparison-direction');
const transactionsTable = document.querySelector('#transactions-table tbody');
const bankPopup = document.getElementById('bank-popup');
const closePopupBtn = document.querySelector('.close-popup');

// Templates
const categoryItemTemplate = document.getElementById('category-item-template');
const transactionRowTemplate = document.getElementById('transaction-row-template');

// Charts
let spendingChart = null;
let monthlyHistoryChart = null;

// Fetch spending data
async function fetchSpendingData() {
  try {
    showLoading();

    const { data, error } = await apiClient('/users/spending/data');

    if (error) {
      showError(error);
      return;
    }

    renderSpendingData(data);
  } catch (err) {
    console.log('Error fetching spending data:', err);
    showError({
      type: 'NETWORK_ERROR',
      message: 'Failed to connect to server',
    });
  }
}

// Render spending data
function renderSpendingData(data) {
  // Section 1: Categories and Pie Chart
  renderCategories(data.categories);
  renderSpendingChart(data.categories);

  // Section 2: Monthly Comparison
  renderMonthlyComparison(data.comparison);

  // Section 3: Monthly History
  renderMonthlyHistory(data.monthlyHistory);

  // Section 4: Transactions
  renderTransactions(data.transactions, data.banks, data.allCategories);

  // Show success content
  loadingState.classList.add('hidden');
  successContent.classList.remove('hidden');
}

// Render categories list
function renderCategories(categories) {
  categoriesContainer.innerHTML = '';

  categories.forEach((category) => {
    const item = categoryItemTemplate.content.cloneNode(true);
    item.querySelector('.category-name').textContent = category.name;
    item.querySelector('.category-amount .amount-value').textContent = `${category.amount.toLocaleString()}`;
    categoriesContainer.appendChild(item);
  });
}

// Render spending pie chart
function renderSpendingChart(categories) {
  ChartFactory.createPieChart('spendingChart', {
    labels: categories.map((c) => c.name),
    values: categories.map((c) => c.amount),
  });
}

// Render monthly comparison
function renderMonthlyComparison(comparison) {
  const difference = Math.abs(comparison.difference);
  comparisonAmount.textContent = difference.toLocaleString();

  if (comparison.difference > 0) {
    comparisonDirection.textContent = 'more';
    comparisonDirection.className = 'negative-comparison';
    comparisonText.className = 'negative-comparison';
  } else {
    comparisonDirection.textContent = 'less';
    comparisonDirection.className = 'positive-comparison';
    comparisonText.className = 'positive-comparison';
  }
}

// Render monthly history chart
function renderMonthlyHistory(history) {
  ChartFactory.createBarChart('monthlyHistoryChart', {
    labels: history.labels,
    values: history.values,
    currentIndex: new Date().getMonth(),
  });
}

// Render transactions table
function renderTransactions(transactions, banks, allCategories) {
  transactionsTable.innerHTML = '';

  transactions.forEach((transaction) => {
    const row = transactionRowTemplate.content.cloneNode(true);

    // Find bank info
    const bank = banks.find((b) => b.id === transaction.bankId) || {};

    // Fill row data
    row.querySelector('.transaction-amount .amount-value').textContent = `${transaction.amount.toLocaleString()}`;
    row.querySelector('.transaction-recipient').textContent = transaction.recipient;

    // Category select
    const categorySelect = row.querySelector('.transaction-category');
    allCategories.forEach((category) => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      option.selected = category === transaction.category;
      categorySelect.appendChild(option);
    });

    // Date formatting
    const date = new Date(transaction.date);
    row.querySelector('.transaction-date').textContent = date.toLocaleDateString();

    // Bank info button
    const bankBtn = row.querySelector('.bank-info-btn');
    bankBtn.dataset.bankId = transaction.bankId;
    bankBtn.querySelector('.bank-name-short').textContent = bank.name;

    // Add event listener for bank info popup
    bankBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showBankPopup(bank);
    });

    // Add event listener for category change
    categorySelect.addEventListener('change', async (e) => {
      try {
        const { error } = await apiClient(`/api/transactions/${transaction.id}`, {
          method: 'PATCH',
          body: JSON.stringify({ category: e.target.value }),
        });

        if (error) {
          throw new Error(error.message || 'Failed to update category');
        }
      } catch (error) {
        alert('Failed to update category');
        e.target.value = transaction.category; // Revert on error
      }
    });

    transactionsTable.appendChild(row);
  });
}

// Show bank info popup
function showBankPopup(bank) {
  if (!bank) return;

  document.querySelector('.popup-logo').src = bank.logo;
  document.querySelector('.popup-logo').alt = `${bank.name} Logo`;
  document.querySelector('.popup-bank-name').textContent = bank.name;
  document.querySelector('.popup-description').textContent = bank.description || 'No description available';
  document.querySelector('.popup-email').textContent = bank.supportEmail || 'N/A';
  document.querySelector('.popup-phone').textContent = bank.supportPhone || 'N/A';

  bankPopup.classList.remove('hidden');
}

// Close bank info popup
closePopupBtn.addEventListener('click', () => {
  bankPopup.classList.add('hidden');
});

bankPopup.addEventListener('click', (e) => {
  if (e.target === bankPopup) {
    bankPopup.classList.add('hidden');
  }
});

// Helper functions
function showLoading() {
  loadingState.classList.remove('hidden');
  errorState.classList.add('hidden');
  successContent.classList.add('hidden');
}

function showError(error) {
  loadingState.classList.add('hidden');
  errorState.classList.remove('hidden');
  successContent.classList.add('hidden');
  errorMessage.textContent = error.message;
}

// Event Listeners
retryBtn.addEventListener('click', fetchSpendingData);

// Initial load
document.addEventListener('DOMContentLoaded', fetchSpendingData);
