import { apiClient } from './api-client.js';

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

    const { data, error } = await apiClient('/users/profile/data');

    if (error) {
      showError(error);
      return;
    }

    renderProfile(data);
  } catch (err) {
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

  // Set up event listeners for delete account button
  const deleteBtn = document.getElementById('deleteBtn');
  const deleteModal = document.getElementById('deleteModal');
  const cancelDelete = document.getElementById('cancelDelete');
  const confirmDelete = document.getElementById('confirmDelete');

  deleteBtn.addEventListener('click', () => {
    deleteModal.style.display = 'flex';
  });

  cancelDelete.addEventListener('click', () => {
    deleteModal.style.display = 'none';
  });

  confirmDelete.addEventListener('click', () => {
    alert('Account deletion request sent. This would call your backend API in a real application.');
    deleteModal.style.display = 'none';

    deleteProfile();
  });

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === deleteModal) {
      deleteModal.style.display = 'none';
    }
  });
}

// Delete profile
const deleteProfile = async (userId) => {
  const deleteBtn = document.getElementById('deleteBtn');
  try {
    deleteBtn.textContent = 'Deleting...';
    deleteBtn.disabled = true;
    const { error } = await apiClient(`/users/profile`, {
      method: 'DELETE',
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (err) {
    alert('Failed to delete user. Please try again.');

    deleteBtn.textContent = 'Delete';
    deleteBtn.disabled = false;
  }
};

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
