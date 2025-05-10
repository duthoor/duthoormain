import { apiClient } from '../api-client.js';

// DOM Elements
const loadingState = document.querySelector('.loading-state');
const errorState = document.querySelector('.error-state');
const successContent = document.querySelector('.success-content');
const errorMessage = document.querySelector('.error-message');
const retryBtn = document.querySelector('.retry-btn');

// Fetch Profile Data
async function fetchProfileData() {
  try {
    showLoading();

    const { data, error } = await apiClient('/admin/profile/data');

    if (error) {
      showError(error);
      return;
    }

    renderProfile(data);
  } catch (err) {
    console.log('Error fetching profile data:', err);
    showError({
      type: 'NETWORK_ERROR',
      message: 'Failed to connect to server',
    });
  }
}

// Render Profile Data
function renderProfile(data) {
  // Set user info
  document.getElementById('userName').textContent = data.name;
  document.getElementById('userEmail').textContent = data.email;
  document.getElementById('userPhone').textContent = data.phone || 'Not provided';
  document.getElementById('userRole').textContent = data.role === 'USER' ? 'Standard User' : 'Administrator';
  document.getElementById('userInitials').textContent = getInitials(data.name);

  if (data.createdAt) {
    const date = new Date(data.createdAt);
    document.getElementById('userCreatedAt').textContent = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  loadingState.classList.add('hidden');
  successContent.classList.remove('hidden');
}

// Helper functions
function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();
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

// Event Listeners
retryBtn.addEventListener('click', fetchProfileData);

// Initial load
document.addEventListener('DOMContentLoaded', fetchProfileData);
