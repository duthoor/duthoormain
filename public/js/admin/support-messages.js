import { apiClient } from '../api-client.js';

const loadingState = document.querySelector('.loading-state');
const errorState = document.querySelector('.error-state');
const successContent = document.querySelector('.success-content');
const errorMessage = document.querySelector('.error-message');
const retryBtn = document.querySelector('.retry-btn');
const messagesTable = document.getElementById('messages-table').querySelector('tbody');
const searchInput = document.getElementById('search-messages');
const sortSelect = document.getElementById('sort-messages');
const messageModal = document.getElementById('message-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');
const replyBtn = document.getElementById('reply-btn');

let allMessages = [];

// Fetch support messages
const fetchMessages = async () => {
  try {
    showLoading();
    const { data, error } = await apiClient('/api/support');

    if (error) {
      showError(error.message);
      return;
    }

    allMessages = data;
    renderMessages(data);
    showSuccess();
  } catch (err) {
    showError('Failed to load support messages. Please try again.');
  }
};

// Render messages to table
const renderMessages = (messages) => {
  messagesTable.innerHTML = '';

  if (messages.length === 0) {
    messagesTable.innerHTML = `
        <tr>
          <td colspan="5" class="no-messages">No support messages found</td>
        </tr>
      `;
    return;
  }

  messages.forEach((message) => {
    const row = document.createElement('tr');
    const date = new Date(message.createdAt).toLocaleString();

    row.innerHTML = `
        <td>${message.user.name}</td>
        <td>${message.user.email}</td>
        <td>
          <div class="message-preview" title="${message.message}">
            ${message.message}
          </div>
        </td>
        <td>${date}</td>
        <td>
          <button class="action-btn view-btn" data-id="${message.id}">View</button>
          <button class="action-btn delete-btn" data-id="${message.id}">Delete</button>
        </td>
      `;
    messagesTable.appendChild(row);
  });

  // Add event listeners to buttons
  document.querySelectorAll('.view-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => viewMessage(e.target.dataset.id));
  });

  document.querySelectorAll('.delete-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => confirmDelete(e.target.dataset.id));
  });
};

// View message details
const viewMessage = (messageId) => {
  const message = allMessages.find((m) => m.id === parseInt(messageId));
  if (!message) return;

  document.getElementById('detail-user').textContent = message.user.name;
  document.getElementById('detail-email').textContent = message.user.email;
  document.getElementById('detail-date').textContent = new Date(message.createdAt).toLocaleString();
  document.getElementById('detail-message').textContent = message.message;

  messageModal.classList.remove('hidden');
};

// Confirm and delete message
const confirmDelete = (messageId) => {
  if (!confirm('Are you sure you want to delete this support message?')) return;
  deleteMessage(messageId);
};

// Delete message
const deleteMessage = async (messageId) => {
  const deleteMessageBtn = document.querySelector(`.delete-btn[data-id="${messageId}"]`);
  try {
    deleteMessageBtn.textContent = 'Deleting...';
    deleteMessageBtn.disabled = true;
    const { error } = await apiClient(`/api/support/${messageId}`, {
      method: 'DELETE',
    });

    if (error) {
      throw new Error(error.message);
    }

    // Refresh the message list
    fetchMessages();
  } catch (err) {
    alert('Failed to delete message. Please try again.');
    deleteMessageBtn.disabled = false;
    deleteMessageBtn.textContent = 'Delete';
  }
};

// Filter and sort messages
const filterAndSortMessages = () => {
  const searchTerm = searchInput.value.toLowerCase();
  const sortOrder = sortSelect.value;

  let filtered = [...allMessages];

  // Filter by search term
  if (searchTerm) {
    filtered = filtered.filter(
      (message) =>
        message.message.toLowerCase().includes(searchTerm) ||
        message.user.name.toLowerCase().includes(searchTerm) ||
        message.user.email.toLowerCase().includes(searchTerm)
    );
  }

  // Sort messages
  filtered.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  renderMessages(filtered);
};

// Event listeners
searchInput.addEventListener('input', filterAndSortMessages);
sortSelect.addEventListener('change', filterAndSortMessages);
closeModalBtns.forEach((btn) => {
  btn.addEventListener('click', () => messageModal.classList.add('hidden'));
});
messageModal.addEventListener('click', (e) => {
  if (e.target === messageModal) messageModal.classList.add('hidden');
});
retryBtn.addEventListener('click', fetchMessages);

// UI state functions
const showLoading = () => {
  loadingState.classList.remove('hidden');
  errorState.classList.add('hidden');
  successContent.classList.add('hidden');
};

const showError = (message) => {
  errorMessage.textContent = message;
  loadingState.classList.add('hidden');
  errorState.classList.remove('hidden');
  successContent.classList.add('hidden');
};

const showSuccess = () => {
  loadingState.classList.add('hidden');
  errorState.classList.add('hidden');
  successContent.classList.remove('hidden');
};

// Initialize
document.addEventListener('DOMContentLoaded', fetchMessages());
