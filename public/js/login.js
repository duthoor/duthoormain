import { apiClient } from './api-client.js';

const loginForm = document.getElementById('loginForm');
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

loginForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const submitButton = this.querySelector('button[type="submit"]');

  let isValid = true;

  // Reset errors
  document.querySelectorAll('.error-message').forEach((el) => (el.style.display = 'none'));
  globalMessage.className = 'global-message';
  globalMessage.style.display = 'none';

  // Validate email/ID
  const loginEmail = document.getElementById('loginEmail').value.trim();
  if (!loginEmail) {
    document.getElementById('loginEmailError').style.display = 'block';
    isValid = false;
  }

  // Validate password
  const loginPassword = document.getElementById('loginPassword').value;
  if (!loginPassword) {
    document.getElementById('loginPasswordError').style.display = 'block';
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  const formData = {
    email: loginEmail,
    password: loginPassword,
  };

  try {
    submitButton.classList.add('btn--loading');
    submitButton.disabled = true;

    const { response, data, error } = await apiClient('/auth/login', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (error) {
      throw new Error(error.message || 'An error occurred');
    }

    showGlobalMessage('OTP sent to your email. Please check your inbox.', 'success');


    // Redirect to OTP verification page
    setTimeout(() => {
      window.location.href = '/auth/otp-verification?user-id=' + encodeURIComponent(data.userId);
    }, 2000);
  } catch (error) {
    showGlobalMessage(error.message || 'Login failed', 'error');
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
