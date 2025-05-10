import { apiClient } from '../api-client.js';

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: var(--primary-dark);
          color: var(--white);
          box-shadow: var(--box-shadow);
          width: 100%;
        }
        
        .wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .nav-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 70px;
        }
        
        .navbar-brand {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--white);
          text-decoration: none;
        }
        
        .navbar-links {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        
        .navbar-links a {
          color: var(--white);
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: var(--border-radius);
          transition: var(--transition);
          white-space: nowrap;
        }
        
        .navbar-links a:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .navbar-links a.active {
          background-color: var(--primary-color);
        }
        
        .logout-btn {
          background-color: var(--error-color);
          color: var(--white);
          border: none;
          padding: 0.5rem 1rem;
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: var(--transition);
          font-family: inherit;
          font-size: inherit;
        }
        
        .logout-btn:hover {
          background-color: #b71c1c;
        }
        
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--white);
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        @media (max-width: 1024px) {
          .navbar-links {
            position: fixed;
            top: 70px;
            right: -100%;
            width: 70%;
            max-width: 300px;
            height: 100vh;
            background-color: var(--primary-dark);
            flex-direction: column;
            justify-content: flex-start;
            padding: 2rem;
            transition: var(--transition);
            z-index: 1000;
          }
          
          .navbar-links.active {
            right: 0;
          }
          
          .navbar-links a {
            width: 100%;
            padding: 1rem;
          }
          
          .menu-toggle {
            display: block;
            z-index: 1001;
          }
          
          .nav-wrapper {
            position: relative;
          }
        }
      </style>
      
      <nav class="navbar">
        <div class="wrapper">
          <div class="nav-wrapper">
            <a href="/" class="navbar-brand">DUTHOOR</a>
            <button class="menu-toggle">☰</button>
            <div class="navbar-links">
              <a href="/users/dashboard" class="active">Dashboard</a>
              <a href="/users/spending">Spending</a>
              <a href="/users/balance">Balance</a>
              <a href="/users/investments">Investments</a>
              <a href="/users/savings">Savings</a>
              <a href="/users/profile">Profile</a>
              <button class="logout-btn">Logout</button>
            </div>
          </div>
        </div>
      </nav>
    `;
  }

  connectedCallback() {
    const menuToggle = this.shadowRoot.querySelector('.menu-toggle');
    const navbarLinks = this.shadowRoot.querySelector('.navbar-links');
    const logoutBtn = this.shadowRoot.querySelector('.logout-btn');

    // Set active link based on current page
    const currentPath = window.location.pathname;
    const links = this.shadowRoot.querySelectorAll('.navbar-links a');
    links.forEach((link) => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    menuToggle.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    logoutBtn.addEventListener('click', async () => {
      logoutBtn.disabled = true;
      logoutBtn.textContent = 'Logging out...';

      const { error } = await apiClient('/auth/logout', { method: 'POST' });

      if (error) {
        alert(error.message || 'Failed to logut');
        logoutBtn.disabled = false;
        logoutBtn.textContent = 'Logout';
      }

      window.location.href = '/auth/login';
    });
  }
}

customElements.define('duthoor-navbar', NavBar);
