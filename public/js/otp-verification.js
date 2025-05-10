import { apiClient } from './api-client.js';

const otpForm = document.getElementById('otpForm');
const globalMessage = document.getElementById('globalMessage');
const otpInputs = document.querySelectorAll('.otp-input');

// Handle OTP input navigation
otpInputs.forEach((input, index) => {
  input.addEventListener('input', function (e) {
    if (this.value.length === 1) {
      if (index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    }
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Backspace' && this.value.length === 0) {
      if (index > 0) {
        otpInputs[index - 1].focus();
      }
    }
  });
});

otpForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const submitButton = this.querySelector('button[type="submit"]');

  // Reset errors
  document.getElementById('otpError').style.display = 'none';
  globalMessage.className = 'global-message';
  globalMessage.style.display = 'none';

  // Collect OTP
  let otp = '';
  otpInputs.forEach((input) => {
    otp += input.value;
  });

  // Validate OTP
  if (otp.length !== 6 || !/^\d+$/.test(otp)) {
    document.getElementById('otpError').style.display = 'block';
    return;
  }

  // Get user-id from search params
  const params = new URLSearchParams(window.location.search);
  const userId = params.get('user-id');
  if (!userId) {
    showGlobalMessage('Missing user ID. Please use the link from your email.', 'error');
    return;
  }

  const formData = {
    otp: otp,
    userId: userId,
  };

  try {
    submitButton.classList.add('btn--loading');
    submitButton.disabled = true;

    const { data, error } = await apiClient('/auth/otp-verification', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (error) {
      throw new Error(error.message || 'An error occurred');
    }

    showGlobalMessage('Verification successful! Redirecting...', 'success');

    setTimeout(() => {
      window.location.href = data.redirectUrl;
    }, 2000);
  } catch (error) {
    showGlobalMessage(error.message || 'Invalid OTP. Please try again.', 'error');
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
