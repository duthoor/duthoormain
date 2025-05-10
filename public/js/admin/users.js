import { apiClient } from '../api-client.js';

const loadingState = document.querySelector('.loading-state');
const errorState = document.querySelector('.error-state');
const successContent = document.querySelector('.success-content');
const errorMessage = document.querySelector('.error-message');
const retryBtn = document.querySelector('.retry-btn');
const usersTable = document.getElementById('users-table').querySelector('tbody');
const searchInput = document.getElementById('search-users');

let allUsers = [];

// Fetch users
const fetchUsers = async () => {
  try {
    showLoading();
    const { data, error } = await apiClient('/admin/users/data');

    if (error) {
      showError(error.message);
      return;
    }

    allUsers = data;
    renderUsers(data);
    showSuccess();
  } catch (err) {
    showError('Failed to load users. Please try again.');
  }
};

// Render users to table
const renderUsers = (users) => {
  usersTable.innerHTML = '';

  if (users.length === 0) {
    usersTable.innerHTML = `
        <tr>
          <td colspan="7" class="no-users">No users found</td>
        </tr>
      `;
    return;
  }

  users.forEach((user) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.cnic}</td>
        <td>${user.phone || 'N/A'}</td>
        <td>${user.role}</td>
        <td>${new Date(user.createdAt).toLocaleString()}</td>
        <td>
          <a class="action-btn view-btn" href="/admin/user-details/?id=${user.id}">View</a>
          <button class="action-btn delete-btn" data-id="${user.id}">Delete</button>
        </td>
      `;
    usersTable.appendChild(row);
  });

  document.querySelectorAll('.delete-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => confirmDelete(e.target.dataset.id));
  });
};

// Confirm and delete user
const confirmDelete = (userId) => {
  if (!confirm('Are you sure you want to delete this user?')) return;
  deleteUser(userId);
};

// Delete user
const deleteUser = async (userId) => {
  const deleteBtn = document.querySelector(`.delete-btn[data-id="${userId}"]`);
  const filteredUsers = allUsers.filter((user) => user.id !== userId);
  try {
    deleteBtn.textContent = 'Deleting...';
    deleteBtn.disabled = true;
    const { error } = await apiClient(`/admin/users/${userId}`, {
      method: 'DELETE',
    });

    if (error) {
      throw new Error(error.message);
    }

    alert('User deleted successfully!');
    allUsers = filteredUsers;
    renderUsers(filteredUsers);
  } catch (err) {
    alert('Failed to delete user. Please try again.');

    deleteBtn.textContent = 'Delete';
    deleteBtn.disabled = false;
  }
};

// Filter users based on search and role
const filterUsers = () => {
  const searchTerm = searchInput.value.toLowerCase();

  const filtered = allUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm) ||
      user.cnic.toLowerCase().includes(searchTerm);

    return matchesSearch;
  });

  renderUsers(filtered);
};

// Event listeners
searchInput.addEventListener('input', filterUsers);

retryBtn.addEventListener('click', fetchUsers);

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

// Initial fetch
document.addEventListener('DOMContentLoaded', fetchUsers);
