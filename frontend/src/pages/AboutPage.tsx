import "./AboutPage.css";

export function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1>About StockAcademy</h1>
          <p className="about-subtitle">Your Gateway to Stock Market Mastery</p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>Who We Are</h2>
            <p>
              StockAcademy is a comprehensive learning platform designed to help
              aspiring investors and traders master the Indian stock market. We
              believe that financial literacy is the foundation of wealth
              creation, and our mission is to make quality stock market
              education accessible to everyone.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              To democratize stock market education in India by providing
              structured, easy-to-understand courses that cover everything from
              basic concepts to advanced trading strategies. We empower
              individuals to make informed investment decisions and build
              sustainable wealth.
            </p>
          </section>

          <section className="about-section">
            <h2>What We Offer</h2>
            <div className="features-grid">
              <div className="feature-box">
                <span className="feature-icon">📚</span>
                <h3>Comprehensive Curriculum</h3>
                <p>Structured courses from basics to advanced topics</p>
              </div>
              <div className="feature-box">
                <span className="feature-icon">🎯</span>
                <h3>Practical Knowledge</h3>
                <p>Real-world examples and actionable strategies</p>
              </div>
              <div className="feature-box">
                <span className="feature-icon">⏱️</span>
                <h3>Self-Paced Learning</h3>
                <p>Learn at your own pace, anytime, anywhere</p>
              </div>
              <div className="feature-box">
                <span className="feature-icon">🎓</span>
                <h3>Expert-Curated Content</h3>
                <p>Content developed by market professionals</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Our Learning Paths</h2>
            <div className="paths-list">
              <div className="path-item">
                <h3>📚 Stock Market Basics</h3>
                <p>
                  Master the fundamentals of the Indian stock market, from
                  understanding stocks to market indices.
                </p>
              </div>
              <div className="path-item">
                <h3>📊 Technical Analysis</h3>
                <p>
                  Learn to read charts, identify patterns, and use indicators to
                  analyze market trends.
                </p>
              </div>
              <div className="path-item">
                <h3>💼 Fundamental Analysis</h3>
                <p>
                  Understand how to evaluate companies and make investment
                  decisions based on financial data.
                </p>
              </div>
              <div className="path-item">
                <h3>🛡️ Risk Management</h3>
                <p>
                  Protect your capital with proven strategies to manage risk and
                  optimize returns.
                </p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Why Choose StockAcademy?</h2>
            <ul className="benefits-list">
              <li>✓ Free and accessible to everyone</li>
              <li>✓ Focused on Indian stock market (NSE & BSE)</li>
              <li>✓ Structured learning from beginner to advanced</li>
              <li>✓ Easy-to-understand content</li>
              <li>✓ Continuously updated with latest market trends</li>
              <li>✓ Community-driven approach</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Get Started Today</h2>
            <p>
              Whether you're just starting your investment journey or looking to
              enhance your trading skills, StockAcademy has everything you need.
              Start with our Stock Market Basics course and progress at your own
              pace.
            </p>
            <a href="/" className="cta-button">
              Start Learning Now
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
