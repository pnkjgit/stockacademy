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
  lessons: Lesson[];
}

export function HomePage() {
  const [modules] = useState<Module[]>([
    {
      id: 1,
      title: "Stock Market Basics",
      emoji: "📚",
      description:
        "Start from scratch and learn the fundamentals of the Indian Stock Market",
      lessons: [
        { id: 1, title: "What is Indian Stock Market?" },
        { id: 2, title: "Understanding Stocks & Shares" },
        { id: 3, title: "NSE vs BSE - Key Differences" },
        { id: 4, title: "Market Indices - Sensex & Nifty" },
        { id: 5, title: "How to Open a Trading Account" },
        { id: 6, title: "Bid-Ask Spreads Explained" },
        { id: 7, title: "Bull & Bear Markets" },
      ],
    },
    {
      id: 2,
      title: "Technical Analysis",
      emoji: "📊",
      description:
        "Master candlesticks, patterns, and indicators to analyze market trends",
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
        "Learn to evaluate companies and make informed investment decisions",
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
        "Protect your capital with proven risk management strategies",
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
                <h3>{module.title}</h3>
              </div>
              <p className="module-description">{module.description}</p>

              <div className="lessons-list">
                <h4>Topics to Learn:</h4>
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
                {module.lessons.length} lessons
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
