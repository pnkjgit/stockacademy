import "./ContactPage.css";

export function ContactPage() {
  return (
    <main className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p className="contact-subtitle">
            We'd love to hear from you. Reach out anytime!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-section">
              <h2>Contact Information</h2>

              <div className="info-card">
                <span className="info-icon">👨‍💼</span>
                <div>
                  <h3>Developer</h3>
                  <p>Pankaj Sharma</p>
                </div>
              </div>

              <div className="info-card">
                <span className="info-icon">✉️</span>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:pankaj.oslo2022@gmail.com">
                    pankaj.oslo2022@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-card">
                <span className="info-icon">🌐</span>
                <div>
                  <h3>Platform</h3>
                  <p>StockAcademy - Indian Stock Market Learning Platform</p>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h2>About This Project</h2>
              <p>
                StockAcademy is a passion project created to make stock market
                education accessible to everyone in India. Whether you're a
                complete beginner or looking to sharpen your trading skills,
                this platform provides comprehensive, easy-to-understand
                content.
              </p>
              <p>
                Developed with modern web technologies to ensure a smooth
                learning experience with a beautiful dark theme interface and
                responsive design.
              </p>
            </div>

            <div className="info-section">
              <h2>Feedback & Support</h2>
              <p>
                Have suggestions for improvement? Want to report a bug? Or just
                want to say hi? Feel free to reach out at the email above. Your
                feedback helps us improve!
              </p>
              <div className="action-buttons">
                <a
                  href="mailto:pankaj.oslo2022@gmail.com"
                  className="btn-email"
                >
                  📧 Send Email
                </a>
              </div>
            </div>
          </div>

          <div className="contact-features">
            <h2>Quick Links</h2>
            <div className="quick-links">
              <a href="/" className="quick-link-item">
                <span className="link-icon">🏠</span>
                <div>
                  <h4>Home</h4>
                  <p>Explore all learning paths</p>
                </div>
              </a>

              <a href="/" className="quick-link-item">
                <span className="link-icon">📚</span>
                <div>
                  <h4>Stock Market Basics</h4>
                  <p>Start learning from scratch</p>
                </div>
              </a>

              <a href="/" className="quick-link-item">
                <span className="link-icon">📊</span>
                <div>
                  <h4>Technical Analysis</h4>
                  <p>Master chart analysis</p>
                </div>
              </a>

              <a href="/" className="quick-link-item">
                <span className="link-icon">💼</span>
                <div>
                  <h4>Fundamental Analysis</h4>
                  <p>Evaluate companies like a pro</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <p>
            © 2024 StockAcademy. Developed by <strong>Pankaj Sharma</strong>
          </p>
          <p>
            Making stock market education accessible to everyone in India 📈
          </p>
        </div>
      </div>
    </main>
  );
}
