import { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

interface Lesson {
  id: number;
  title: string;
}

interface Module {
  id: number;
  title: string;
  emoji: string;
  description: string;
  difficulty: string;
  estimatedHours: number;
  targetAudience: string;
  learningOutcomes: string[];
  keySkills: string[];
  lessons: Lesson[];
}

export function HomePage() {
  const [modules] = useState<Module[]>([
    {
      id: 1,
      title: "Stock Market Basics",
      emoji: "📚",
      description:
        "Start from scratch and learn the fundamentals of the Indian Stock Market. Perfect for absolute beginners.",
      difficulty: "Beginner",
      estimatedHours: 8,
      targetAudience: "Beginners, New Investors",
      learningOutcomes: [
        "Understand how stock markets work",
        "Learn to open a trading account",
        "Master reading stock quotes",
        "Build a diversified portfolio",
      ],
      keySkills: [
        "Stock Market Knowledge",
        "Trading Basics",
        "Risk Awareness",
        "Portfolio Building",
      ],
      lessons: [
        { id: 1, title: "What is Indian Stock Market?" },
        { id: 2, title: "Understanding Stocks & Shares" },
        { id: 3, title: "NSE vs BSE - Key Differences" },
        { id: 4, title: "Market Indices - Sensex & Nifty" },
        { id: 5, title: "How to Open a Trading Account" },
        { id: 6, title: "Bid-Ask Spreads Explained" },
        { id: 7, title: "Bull & Bear Markets" },
        { id: 8, title: "Types of Orders in Stock Trading" },
        { id: 9, title: "Brokers and Brokerage Charges" },
        { id: 10, title: "How to Read Stock Quotes" },
        { id: 11, title: "Intraday vs Long-term Investing" },
        { id: 12, title: "Stock Splits and Bonus Shares" },
        { id: 13, title: "Dividends and Dividend Yield" },
        { id: 14, title: "Diversification and Portfolio Building" },
        { id: 15, title: "How to Research and Analyze a Stock" },
      ],
    },
    {
      id: 2,
      title: "Technical Analysis",
      emoji: "📊",
      description:
        "Master chart patterns, candlestick analysis, and trading indicators to identify market trends and entry/exit points.",
      difficulty: "Intermediate",
      estimatedHours: 12,
      targetAudience: "Active Traders, Swing Traders",
      learningOutcomes: [
        "Read and interpret stock charts",
        "Identify candlestick patterns",
        "Use technical indicators effectively",
        "Spot market reversals and breakouts",
      ],
      keySkills: [
        "Chart Analysis",
        "Pattern Recognition",
        "Indicator Interpretation",
        "Trend Following",
      ],
      lessons: [
        { id: 1, title: "Candlestick Patterns 101" },
        { id: 2, title: "Support & Resistance Levels" },
        { id: 3, title: "Understanding Trends" },
        { id: 4, title: "Moving Averages" },
        { id: 5, title: "RSI & MACD Indicators" },
        { id: 6, title: "Chart Patterns - Triangles & Flags" },
        { id: 7, title: "Volume & Price Action" },
        { id: 8, title: "Breakouts & Reversals" },
      ],
    },
    {
      id: 3,
      title: "Fundamental Analysis",
      emoji: "💼",
      description:
        "Analyze company financial statements, valuation metrics, and business fundamentals to make informed long-term investment decisions.",
      difficulty: "Intermediate",
      estimatedHours: 10,
      targetAudience: "Long-term Investors, Value Investors",
      learningOutcomes: [
        "Evaluate company financial health",
        "Calculate key valuation ratios",
        "Assess competitive advantages",
        "Identify undervalued stocks",
      ],
      keySkills: [
        "Financial Statement Analysis",
        "Valuation Methods",
        "Business Evaluation",
        "Industry Understanding",
      ],
      lessons: [
        { id: 1, title: "Reading Financial Statements" },
        { id: 2, title: "P/E Ratio & Valuation" },
        { id: 3, title: "Dividend Yield Explained" },
        { id: 4, title: "Company Annual Reports" },
        { id: 5, title: "Economic Indicators" },
        { id: 6, title: "Sector Analysis" },
        { id: 7, title: "Due Diligence Guide" },
      ],
    },
    {
      id: 4,
      title: "Risk Management",
      emoji: "🛡️",
      description:
        "Protect your capital with proven risk management strategies, position sizing, and portfolio protection techniques.",
      difficulty: "Intermediate",
      estimatedHours: 6,
      targetAudience: "All Investors, Risk-Conscious Traders",
      learningOutcomes: [
        "Manage portfolio risk effectively",
        "Calculate risk-reward ratios",
        "Master position sizing",
        "Protect capital from losses",
      ],
      keySkills: [
        "Stop Loss Management",
        "Portfolio Diversification",
        "Risk Calculation",
        "Emotional Control",
      ],
      lessons: [
        { id: 1, title: "Stop Loss Orders" },
        { id: 2, title: "Position Sizing" },
        { id: 3, title: "Diversification Strategy" },
        { id: 4, title: "Risk-Reward Ratio" },
        { id: 5, title: "Portfolio Allocation" },
        { id: 6, title: "Managing Emotions" },
      ],
    },
  ]);

  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Master the Indian Stock Market</h1>
        <p className="hero-subtitle">
          Learn everything from basics to advanced strategies. Start with the
          fundamentals and progress at your own pace.
        </p>
        <div className="hero-buttons">
          <Link to={`/module/1/lesson/1`} className="btn btn-primary">
            Start Learning Now
          </Link>
          <button className="btn btn-secondary">Explore All Topics</button>
        </div>
      </section>

      {/* Learning Modules Section */}
      <section className="modules-section">
        <h2 className="section-title">Learning Paths</h2>
        <div className="modules-grid">
          {modules.map((module) => (
            <div key={module.id} className="module-card">
              <div className="module-header">
                <span className="module-emoji">{module.emoji}</span>
                <div className="header-content">
                  <h3>{module.title}</h3>
                  <div className="module-meta">
                    <span
                      className={`difficulty difficulty-${module.difficulty.toLowerCase()}`}
                    >
                      {module.difficulty}
                    </span>
                    <span className="estimated-time">
                      ⏱️ {module.estimatedHours}h
                    </span>
                  </div>
                </div>
              </div>

              <p className="module-description">{module.description}</p>

              <div className="audience-section">
                <span className="label">👥 For:</span>
                <p className="audience-text">{module.targetAudience}</p>
              </div>

              <div className="outcomes-section">
                <h4>What You'll Learn:</h4>
                <ul className="outcomes-list">
                  {module.learningOutcomes.map((outcome, idx) => (
                    <li key={idx}>
                      <span className="check-mark">✓</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="skills-section">
                <h4>Key Skills:</h4>
                <div className="skills-tags">
                  {module.keySkills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lessons-list">
                <h4>📚 Topics Covered:</h4>
                <ul>
                  {module.lessons.slice(0, 5).map((lesson) => (
                    <li key={lesson.id}>
                      <span className="lesson-dot">•</span>
                      {lesson.title}
                    </li>
                  ))}
                  {module.lessons.length > 5 && (
                    <li className="more-lessons">
                      +{module.lessons.length - 5} more topics
                    </li>
                  )}
                </ul>
              </div>

              <div className="lesson-count">
                {module.lessons.length} lessons • {module.estimatedHours} hours
              </div>

              <Link
                to={`/module/${module.id}/lesson/1`}
                className="module-link"
              >
                Start Learning →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
