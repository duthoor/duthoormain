import { apiClient } from './api-client.js';

const resetPasswordForm = document.getElementById('resetPasswordForm');
const globalMessage = document.getElementById('globalMessage');

const passwordToggleBtns = document.querySelectorAll('.password-toggle');

passwordToggleBtns.forEach((btn) => {
  const passwordInput = document.getElementById(btn.dataset.target);
  btn.addEventListener('click', function () {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    btn.classList.toggle('active');
    btn.setAttribute('aria-pressed', !isPassword);
  });
});

resetPasswordForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const submitButton = this.querySelector('button[type="submit"]');

  let isValid = true;

  // Reset errors
  document.querySelectorAll('.error-message').forEach((el) => (el.style.display = 'none'));
  globalMessage.className = 'global-message';
  globalMessage.style.display = 'none';

  // Validate new password
  const newPassword = document.getElementById('newPassword').value;
  if (newPassword.length < 8) {
    document.getElementById('newPasswordError').style.display = 'block';
    isValid = false;
  }

  // Validate confirm password
  const confirmNewPassword = document.getElementById('confirmNewPassword').value;
  if (newPassword !== confirmNewPassword) {
    document.getElementById('confirmNewPasswordError').style.display = 'block';
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const resetToken = urlParams.get('token');
  const userId = urlParams.get('user-id');

  const formData = {
    password: newPassword,
    token: resetToken,
    userId,
  };

  try {
    submitButton.classList.add('btn--loading');
    submitButton.disabled = true;

    // await simulatePasswordReset(formData);
    const { data, error } = await apiClient('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (error) {
      throw new Error(error.message || 'Failed to reset password. Please try again.');
    }

    showGlobalMessage('Password reset successfully! Redirecting to login...', 'success');

    setTimeout(() => {
      window.location.href = '/auth/login';
    }, 2000);
  } catch (error) {
    showGlobalMessage(error.message || 'Failed to reset password. Please try again.', 'error');
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
