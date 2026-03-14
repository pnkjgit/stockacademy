import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { getLessonContent } from "../data/lessonContent";
import "./LessonPage.css";

interface Lesson {
  id: number;
  title: string;
}

interface Module {
  id: number;
  title: string;
  emoji: string;
  lessons: Lesson[];
}

// Module data
const modules: Module[] = [
  {
    id: 1,
    title: "Stock Market Basics",
    emoji: "📚",
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
    lessons: [
      { id: 1, title: "Stop Loss Orders" },
      { id: 2, title: "Position Sizing" },
      { id: 3, title: "Diversification Strategy" },
      { id: 4, title: "Risk-Reward Ratio" },
      { id: 5, title: "Portfolio Allocation" },
      { id: 6, title: "Managing Emotions" },
    ],
  },
];

export function LessonPage() {
  const { moduleId, lessonId } = useParams<{
    moduleId: string;
    lessonId: string;
  }>();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const mId = parseInt(moduleId || "1");
  const lId = parseInt(lessonId || "1");

  const module = modules.find((m) => m.id === mId);
  const lesson = getLessonContent(mId, lId);

  if (!module || !lesson) {
    return (
      <div className="lesson-page">
        <div className="not-found">
          <h2>Lesson not found</h2>
          <p>The lesson you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page-container">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar lessons={module.lessons} currentLessonId={lId} moduleId={mId} />

      {/* Main Content */}
      <main className="lesson-page">
        {/* Lesson Header */}
        <div className="lesson-header">
          <div className="lesson-header-content">
            <button
              className="mobile-menu-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰ Topics
            </button>
            <div className="breadcrumb">
              <span className="breadcrumb-item">{module.title}</span>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-item active">{lesson.title}</span>
            </div>
            <div className="lesson-meta">
              <span className="lesson-duration">⏱️ {lesson.duration}</span>
              <span className="lesson-progress">
                {lId} of {module.lessons.length}
              </span>
            </div>
          </div>
        </div>

        {/* Lesson Content */}
        <div className="lesson-content">
          <div className="content-header">
            <h1>{lesson.title}</h1>
          </div>

          <div className="markdown-content">
            {lesson.content.split("\n").map((line, idx) => {
              if (line.startsWith("## ")) {
                return (
                  <h2 key={idx} className="md-h2">
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={idx} className="md-h3">
                    {line.replace("### ", "")}
                  </h3>
                );
              }
              if (line.startsWith("- ")) {
                return (
                  <li key={idx} className="md-li">
                    {line.replace("- ", "")}
                  </li>
                );
              }
              if (line.startsWith("| ")) {
                // Simple table rendering
                return (
                  <p key={idx} className="md-table-row">
                    {line}
                  </p>
                );
              }
              if (line.trim() === "") {
                return <div key={idx} className="md-spacer" />;
              }
              return (
                <p key={idx} className="md-p">
                  {line}
                </p>
              );
            })}
          </div>

          {/* Key Points */}
          <div className="key-points">
            <h3>📌 Key Takeaways</h3>
            <ul className="key-points-list">
              {lesson.keyPoints.map((point, idx) => (
                <li key={idx}>
                  <span className="checkmark">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="lesson-navigation">
            {lId > 1 && (
              <button
                className="nav-btn nav-prev"
                onClick={() => navigate(`/module/${mId}/lesson/${lId - 1}`)}
              >
                ← Previous Lesson
              </button>
            )}
            {lId < module.lessons.length && (
              <button
                className="nav-btn nav-next"
                onClick={() => navigate(`/module/${mId}/lesson/${lId + 1}`)}
              >
                Next Lesson →
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
