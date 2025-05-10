import { apiClient } from './api-client.js';

const loadingState = document.querySelector('.loading-state');
const errorState = document.querySelector('.error-state');
const successContent = document.querySelector('.success-content');
const errorMessage = document.querySelector('.error-message');
const retryBtn = document.querySelector('.retry-btn');
const bankCardsContainer = document.getElementById('bank-cards-container');
const bankCardTemplate = document.getElementById('bank-card-template');

// Data Elements
const totalPortfolioEl = document.getElementById('total-portfolio');
const totalProfitLossEl = document.getElementById('total-profit-loss');
const totalCashEl = document.getElementById('total-cash');

// Fetch investments data
async function fetchInvestmentsData() {
  try {
    showLoading();

    const { data, error } = await apiClient('/users/investments/data');

    if (error) {
      showError(error);
      return;
    }

    renderInvestments(data);
  } catch (err) {
    console.error('Error fetching investments data:', err);
    showError({
      type: 'NETWORK_ERROR',
      message: 'Failed to connect to server',
    });
  }
}

// Render investments data
function renderInvestments(data) {
  // Set summary values
  totalPortfolioEl.textContent = `${data.summary.totalPortfolio.toLocaleString()}`;
  totalCashEl.textContent = `${data.summary.totalCash.toLocaleString()}`;

  // Set profit/loss with color coding
  const profitLoss = data.summary.totalProfitLoss;
  totalProfitLossEl.textContent = `${profitLoss >= 0 ? '+' : ''}${profitLoss.toLocaleString()}`;
  totalProfitLossEl.className = profitLoss >= 0 ? 'summary-value positive' : 'summary-value negative';

  // Render bank cards
  bankCardsContainer.innerHTML = '';
  data.accounts.forEach((account) => {
    const card = bankCardTemplate.content.cloneNode(true);

    // Set bank info
    const logo = card.querySelector('.bank-logo');
    logo.src = account.logo || '/public/images/default-bank.png';
    logo.alt = `${account.name} Logo`;
    card.querySelector('.bank-name').textContent = account.name;

    // Set values
    card.querySelector('.portfolio-value').textContent = `${account.portfolio.toLocaleString()}`;

    const profitLossValue = card.querySelector('.profit-loss-value');
    profitLossValue.textContent = `${account.profitLoss >= 0 ? '+' : ''}${account.profitLoss.toLocaleString()}`;
    profitLossValue.classList.add(account.profitLoss >= 0 ? 'positive' : 'negative');

    card.querySelector('.cash-value').textContent = `${account.cash.toLocaleString()}`;

    bankCardsContainer.appendChild(card);
  });

  // Show success content
  loadingState.classList.add('hidden');
  successContent.classList.remove('hidden');
}

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
retryBtn.addEventListener('click', fetchInvestmentsData);

// Initial load
document.addEventListener('DOMContentLoaded', fetchInvestmentsData);
