import { apiClient } from './api-client.js';

const forgotPasswordForm = document.getElementById('forgotPasswordForm');
const globalMessage = document.getElementById('globalMessage');

forgotPasswordForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const submitButton = this.querySelector('button[type="submit"]');

  let isValid = true;

  // Reset errors
  document.querySelectorAll('.error-message').forEach((el) => (el.style.display = 'none'));
  globalMessage.className = 'global-message';
  globalMessage.style.display = 'none';

  // Validate email
  const resetEmail = document.getElementById('resetEmail').value.trim();
  if (!resetEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resetEmail)) {
    document.getElementById('resetEmailError').style.display = 'block';
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  const formData = { email: resetEmail };

  try {
    submitButton.classList.add('btn--loading');
    submitButton.disabled = true;

    const { data, error } = await apiClient('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (error) {
      throw new Error(error.message || 'An error occurred. Please try again.');
    }

    showGlobalMessage('Password reset link sent to your email!', 'success');
  } catch (error) {
    showGlobalMessage(error.message || 'Failed to send reset link. Please try again.', 'error');
  } finally {
    submitButton.classList.remove('btn--loading');
    submitButton.disabled = false;
  }
});

function showGlobalMessage(message, type) {
  globalMessage.textContent = message;
  globalMessage.className = `global-message ${type}`;
  globalMessage.style.display = 'block';
}
