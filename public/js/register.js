import { apiClient } from './api-client.js';

const form = document.getElementById('signupForm');
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

form.addEventListener('submit', handleSubmit);

function showGlobalMessage(message, type) {
  globalMessage.textContent = message;
  globalMessage.className = `global-message ${type}`;
  globalMessage.style.display = 'block';
}

async function handleSubmit(e) {
  e.preventDefault();
  const submitButton = this.querySelector('button[type="submit"]');

  // Validate form
  let isValid = true;

  // Reset errors
  document.querySelectorAll('.error-message').forEach((el) => (el.style.display = 'none'));
  globalMessage.className = 'global-message';
  globalMessage.style.display = 'none';

  // Validate full name
  const fullName = document.getElementById('fullName').value.trim();
  if (!fullName) {
    document.getElementById('fullNameError').style.display = 'block';
    isValid = false;
  }

  // Validate email
  const email = document.getElementById('email').value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('emailError').style.display = 'block';
    isValid = false;
  }

  // Validate ID number
  const idNumber = document.getElementById('idNumber').value.trim();
  if (!idNumber) {
    document.getElementById('idNumberError').style.display = 'block';
    isValid = false;
  }

  // Validate phone number
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  const saudiPhoneRegex = /^\+966[0-9]{8,9}$/;
  if (!phoneNumber || !saudiPhoneRegex.test(phoneNumber)) {
    document.getElementById('phoneNumberError').style.display = 'block';
    isValid = false;
  }

  // Validate password
  const password = document.getElementById('password').value;
  if (password.length < 8) {
    document.getElementById('passwordError').style.display = 'block';
    isValid = false;
  }

  // Validate confirm password
  const confirmPassword = document.getElementById('confirmPassword').value;
  if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').style.display = 'block';
    isValid = false;
  }

  if (!isValid) {
    showGlobalMessage('Please fix the errors below.', 'error');
    return;
  }

  try {
    // Show loading state
    submitButton.classList.add('btn--loading');
    submitButton.disabled = true;

    const formData = {
      fullName,
      email,
      idNumber,
      phoneNumber,
      password,
    };

    const { data, error } = await apiClient('/auth/register', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (error) {
      throw new Error(error.message || 'An error occurred');
    }

    showGlobalMessage('Account created successfully!', 'success');
    form.reset();

    // Redirect to login page after a short delay
    setTimeout(() => {
      window.location.href = '/auth/login';
    }, 2000);
  } catch (error) {
    showGlobalMessage(error.message || 'An error occurred', 'error');
  } finally {
    // Remove loading state
    submitButton.classList.remove('btn--loading');
    submitButton.disabled = false;
  }
}
