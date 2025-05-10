import { apiClient } from './api-client.js';
import { ChartFactory } from './chart-factory.js';

// DOM Elements
const loadingState = document.querySelector('.loading-state');
const errorState = document.querySelector('.error-state');
const successContent = document.querySelector('.success-content');
const errorMessage = document.querySelector('.error-message');
const retryBtn = document.querySelector('.retry-btn');

// Templates
const bankCardTemplate = document.getElementById('bank-card-template');
const savingsRowTemplate = document.getElementById('savings-row-template');

// Initial load
document.addEventListener('DOMContentLoaded', fetchDashboardData);

// Retry handler
retryBtn.addEventListener('click', fetchDashboardData);

async function fetchDashboardData() {
  try {
    showLoading();

    const { data, error } = await apiClient('/users/dashboard/data');

    if (error) {
      showError(error);
      return;
    }

    console.log('Dashboard data:', data);

    renderDashboard(data);
  } catch (err) {
    console.log('Error fetching dashboard data:', err);
    showError({
      type: 'NETWORK_ERROR',
      message: 'Failed to connect to server',
    });
  }
}

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

function renderDashboard(data) {
  // Basic data
  document.getElementById('user-name').textContent = data.user.name;
  document.getElementById('current-balance').textContent = data.balance.toLocaleString();
  document.getElementById('portfolio-total').textContent = data.investments.summary.totalPortfolio.toLocaleString();

  // Render charts
  renderMonthlyChart(data.monthlyData);
  renderSpendingChart(data.categories);

  // Render investments
  const investmentsContainer = document.getElementById('investments-container');
  investmentsContainer.innerHTML = '';

  data.investments.accounts.forEach((account) => {
    const card = bankCardTemplate.content.cloneNode(true);
    card.querySelector('.bank-name').textContent = account.name;
    card.querySelector('.bank-logo').src = account.logo;
    card.querySelector('.portfolio-value').textContent = account.portfolio.toLocaleString();
    card.querySelector('.profit-loss-value').textContent = account.profitLoss.toLocaleString();
    card.querySelector('.cash-value').textContent = account.cash.toLocaleString();
    investmentsContainer.appendChild(card);
  });

  // Render savings table
  const savingsTable = document.querySelector('#savings-table tbody');
  savingsTable.innerHTML = '';

  data.payables.forEach((loan) => {
    const row = savingsRowTemplate.content.cloneNode(true);
    row.querySelector('.loan-type').textContent = loan.name;
    row.querySelector('.total-amount').textContent = loan.total.toLocaleString();
    row.querySelector('.paid-amount').textContent = loan.payoffAmount.toLocaleString();
    savingsTable.appendChild(row);
  });

  // Show success content
  loadingState.classList.add('hidden');
  successContent.classList.remove('hidden');
}

function renderMonthlyChart(data) {
  ChartFactory.createBarChart('monthlyChart', {
    labels: data.labels,
    values: data.values,
    currentIndex: new Date().getMonth(),
  });
}

function renderSpendingChart(categories) {
  ChartFactory.createPieChart('spendingChart', {
    labels: categories.map((c) => c.name),
    values: categories.map((c) => c.amount),
  });
}
