import { apiClient } from './api-client.js';

// DOM Elements
const loadingState = document.querySelector('.loading-state');
const errorState = document.querySelector('.error-state');
const successContent = document.querySelector('.success-content');
const errorMessage = document.querySelector('.error-message');
const retryBtn = document.querySelector('.retry-btn');
const bankCardsContainer = document.getElementById('bank-cards-container');
const bankCardTemplate = document.getElementById('bank-card-template');
const totalBalanceEl = document.getElementById('total-balance');

// Initialize Swiper after data loads
let swiper = null;

// Fetch accounts data
async function fetchAccountsData() {
  try {
    showLoading();

    const { data, error } = await apiClient('/users/balance/data');

    if (error) {
      showError(error);
      return;
    }

    renderAccounts(data);
    initSwiper();
  } catch (err) {
    showError({
      type: 'NETWORK_ERROR',
      message: 'Failed to connect to server',
    });
  }
}

// Render accounts data
function renderAccounts(data) {
  // Set total balance
  totalBalanceEl.textContent = data.totalBalance.toLocaleString();

  // Render bank cards
  bankCardsContainer.innerHTML = '';
  data.accounts.forEach((account) => {
    const card = bankCardTemplate.content.cloneNode(true);

    // Set bank info
    const logo = card.querySelector('.bank-logo');
    logo.src = account.logo;
    logo.alt = `${account.name} Logo`;
    card.querySelector('.bank-name').textContent = account.name;
    card.querySelector('.balance-amount').textContent = account.balance.toLocaleString();

    bankCardsContainer.appendChild(card);
  });

  // Show success content
  loadingState.classList.add('hidden');
  successContent.classList.remove('hidden');
}

// Initialize Swiper carousel
function initSwiper() {
  swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
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
retryBtn.addEventListener('click', fetchAccountsData);

// Initial load
document.addEventListener('DOMContentLoaded', fetchAccountsData);
