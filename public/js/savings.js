import { apiClient } from './api-client.js';

// DOM Elements
const loadingState = document.querySelector('.loading-state');
const errorState = document.querySelector('.error-state');
const successContent = document.querySelector('.success-content');
const errorMessage = document.querySelector('.error-message');
const retryBtn = document.querySelector('.retry-btn');
const bankCardsContainer = document.getElementById('bank-cards-container');
const payablesContainer = document.getElementById('payables-container');
const totalSavingsEl = document.getElementById('total-savings');
const addPayableBtn = document.querySelector('.add-payable-btn');
const modalOverlay = document.getElementById('modal-overlay');
const closeModalBtn = document.querySelector('.close-modal');
const payableForm = document.getElementById('add-payable-form');

// Templates
const bankCardTemplate = document.getElementById('bank-card-template');
const payableCardTemplate = document.getElementById('payable-card-template');

// Fetch savings data
async function fetchSavingsData() {
  try {
    showLoading();

    const { data, error } = await apiClient('/users/savings/data');

    if (error) {
      showError(error);
      return;
    }

    renderSavings(data);
  } catch (err) {
    showError({
      type: 'NETWORK_ERROR',
      message: 'Failed to connect to server',
    });
  }
}

// Render savings data
function renderSavings(data) {
  // Set total savings
  totalSavingsEl.textContent = data.totalSavings.toLocaleString();

  // Render bank cards
  bankCardsContainer.innerHTML = '';
  data.banks.forEach((bank) => {
    const card = bankCardTemplate.content.cloneNode(true);

    // Set bank info
    const logo = card.querySelector('.bank-logo');
    logo.src = bank.logo;
    logo.alt = `${bank.name} Logo`;
    card.querySelector('.bank-name').textContent = bank.name;
    card.querySelector('.balance-amount').textContent = bank.balance.toLocaleString();

    bankCardsContainer.appendChild(card);
  });

  // Render payables
  payablesContainer.innerHTML = '';
  data.payables.forEach((payable) => {
    const card = payableCardTemplate.content.cloneNode(true);
    const cardName = card.querySelector('.payable-name');
    const cardPriorityValue = card.querySelector('.priority-value');
    const cardTotalAmount = card.querySelector('.total-amount');
    const cardPayoffAmount = card.querySelector('.payoff-amount');
    const cardProgress = card.querySelector('.progress-fill');
    const deleteBtn = card.querySelector('.delete-payable-btn');

    cardName.textContent = payable.name;
    cardPriorityValue.textContent = payable.priority;
    cardTotalAmount.textContent = payable.total.toLocaleString();
    cardPayoffAmount.textContent = payable.payoffAmount.toLocaleString();

    // Calculate progress percentage
    const progress = (payable.payoffAmount / payable.total) * 100;
    cardProgress.style.width = `${Math.min(progress, 100)}%`;
    cardProgress.title = `${progress.toFixed(2)}%`;

    payablesContainer.appendChild(card);

    deleteBtn.addEventListener('click', (event) => deletePayable(event, payable.id));
  });

  // Show success content
  loadingState.classList.add('hidden');
  successContent.classList.remove('hidden');
}

// Modal Handling
addPayableBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
  modalOverlay.classList.add('hidden');
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.add('hidden');
  }
});

// Form Submission
payableForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const submitBtn = payableForm.querySelector('.submit-btn');

  try {
    // Show loading state
    submitBtn.classList.add('btn--loading');
    submitBtn.disabled = true;
    const newPayable = {
      name: document.getElementById('payable-name').value,
      priority: parseInt(document.getElementById('payable-priority').value),
      total: parseFloat(document.getElementById('payable-total').value),
    };

    // Use your apiClient to add the payable
    const { error } = await apiClient('/api/payables', {
      method: 'POST',
      body: JSON.stringify(newPayable),
    });

    if (error) {
      throw new Error(error.message || 'Failed to add payable');
    }

    // Refresh data
    fetchSavingsData();

    // Reset and close form
    payableForm.reset();
    modalOverlay.classList.add('hidden');
  } catch (error) {
    alert(error.message || 'Failed to add payable');
  } finally {
    // Reset button
    submitBtn.classList.remove('btn--loading');
    submitBtn.disabled = false;
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

async function deletePayable(event, id) {
  const button = event.target.closest('.delete-payable-btn');
  const card = event.target.closest('.payable-card');
  button.disabled = true;
  button.classList.add('deleting');

  try {
    const { error } = await apiClient(`/api/payables/${id}`, { method: 'DELETE' });

    if (error) {
      throw new Error(error.message || 'Failed to delete');
    }

    card.remove();
  } catch (error) {
    alert(error.message || 'Failed to delete');
  }
}

// Event Listeners
retryBtn.addEventListener('click', fetchSavingsData);

// Initial load
document.addEventListener('DOMContentLoaded', fetchSavingsData);
