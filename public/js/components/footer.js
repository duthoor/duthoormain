import { apiClient } from '../api-client.js';

class DuthoorFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: var(--primary-dark);
          color: var(--white);
          padding: 2rem 0;
          margin-top: 3rem;
        }

        :host * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        .footer-wrapper {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          padding-top: 1.5rem;
        }
        
        .about-section h3,
        .contact-section h3 {
          color: var(--primary-color);
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }
        
        .about-section p {
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        
        .read-more {
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 600;
          display: inline-block;
          margin-top: 0.5rem;
        }
        
        .read-more:hover {
          text-decoration: underline;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .contact-form textarea {
          height: 120px;
          padding: 0.75rem;
          border-radius: var(--border-radius);
          border: 1px solid var(--border-color);
          background-color: var(--light-gray);
          font-family: inherit;
          resize: vertical;
        }
        
        .submit-btn {
          padding: 0.75rem 1.5rem;
          background-color: var(--primary-color);
          color: var(--white);
          border: none;
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-weight: 600;
          width: fit-content;
        }
        
        .submit-btn:hover {
          background-color: var(--primary-hover);
        }
        
        .submit-btn.loading {
          opacity: 0.7;
          pointer-events: none;
        }
        
        .loading-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: var(--white);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          display: none;
        }
        
        .submit-btn.loading .loading-spinner {
          display: block;
        }
        
        .form-message {
          padding: 0.75rem;
          border-radius: var(--border-radius);
          margin-top: 1rem;
          display: none;
        }
        
        .form-message.success {
          background-color: rgba(255, 255, 255, 0.1);
          color: var(--white);
          border: 1px solid var(--success-color);
          display: block;
          position: relative;
          padding-left: 2.5rem;
        }

        .form-message.success::before {
          content: "✓";
          position: absolute;
          left: 1rem;
          color: var(--success-color);
          font-weight: bold;
        }

        .form-message.error {
          background-color: rgba(255, 255, 255, 0.1);
          color: var(--white);
          border: 1px solid var(--error-color);
          display: block;
          position: relative;
          padding-left: 2.5rem;
        }

        .form-message.error::before {
          content: "!";
          position: absolute;
          left: 1rem;
          color: var(--error-color);
          font-weight: bold;
        }

        /* Animation for better visibility */
        @keyframes pulseOpacity {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }

        .form-message {
          animation: pulseOpacity 2s infinite;
          transition: all 0.3s ease;
        }
        
        .copyright {
          text-align: center;
          margin-top: 3rem;
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      </style>
      
      <footer class="footer">
        <div class="footer-wrapper">
          <div class="footer-content">
            <div class="about-section">
              <h3>About DUTHOOR</h3>
              <p>DUTHOOR is a comprehensive financial management platform designed to help you track your spending, investments, and savings all in one place. Our mission is to provide intuitive tools for better financial decision making.</p>
              <a href="/about" class="read-more">Read more about us →</a>
            </div>
            
            <div class="contact-section">
              <h3>Contact Support</h3>
              <form class="contact-form" id="supportForm">
                <textarea 
                  placeholder="How can we help you?" 
                  required
                ></textarea>
                <button type="submit" class="submit-btn">
                  <span class="btn-text">Send Message</span>
                  <span class="loading-spinner"></span>
                </button>
                <div class="form-message"></div>
              </form>
            </div>
          </div>
          
          <div class="copyright">
            <p>© ${new Date().getFullYear()} DUTHOOR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }

  connectedCallback() {
    const form = this.shadowRoot.getElementById('supportForm');
    const submitBtn = this.shadowRoot.querySelector('.submit-btn');
    const btnText = this.shadowRoot.querySelector('.btn-text');
    const messageEl = this.shadowRoot.querySelector('.form-message');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const message = form.querySelector('textarea').value;

      // Show loading state
      submitBtn.classList.add('loading');
      btnText.textContent = 'Sending...';

      try {
        // Use your apiClient to submit the form
        const { error } = await apiClient('/api/support', {
          method: 'POST',
          body: JSON.stringify({ message }),
        });

        if (error) throw error;

        // Show success
        messageEl.textContent = 'Your message has been sent successfully!';
        messageEl.classList.remove('error');
        messageEl.classList.add('success');
        form.reset();
      } catch (error) {
        // Show error
        messageEl.textContent = error.message || 'Failed to send message. Please try again.';
        messageEl.classList.remove('success');
        messageEl.classList.add('error');
      } finally {
        // Reset button
        submitBtn.classList.remove('loading');
        btnText.textContent = 'Send Message';

        // Hide message after 5 seconds
        setTimeout(() => {
          messageEl.classList.remove('success', 'error');
        }, 5000);
      }
    });
  }
}

customElements.define('duthoor-footer', DuthoorFooter);
