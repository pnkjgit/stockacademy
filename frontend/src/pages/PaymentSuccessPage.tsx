import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import "./PaymentSuccessPage.css";

export function PaymentSuccessPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Mark subscription as completed
    localStorage.setItem("subscription_completed", "true");

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>

        <h1>Payment Successful! 🎉</h1>
        <p className="subtitle">Welcome to StockAcademy Premium</p>

        <div className="success-details">
          <div className="detail-item">
            <span className="label">Account Email</span>
            <span className="value">{user?.email}</span>
          </div>
          <div className="detail-item">
            <span className="label">Plan Type</span>
            <span className="value">Annual Subscription</span>
          </div>
          <div className="detail-item">
            <span className="label">Amount Paid</span>
            <span className="value">₹99.00</span>
          </div>
          <div className="detail-item">
            <span className="label">Validity</span>
            <span className="value">12 Months</span>
          </div>
        </div>

        <div className="success-message">
          <h3>✅ What's Next?</h3>
          <ul>
            <li>
              <strong>Full Access:</strong> All 36 lessons and modules unlocked
            </li>
            <li>
              <strong>Premium Features:</strong> Access to advanced analysis
              tools
            </li>
            <li>
              <strong>Certificates:</strong> Get completion certificates for
              each module
            </li>
            <li>
              <strong>Community:</strong> Join exclusive member discussions
            </li>
            <li>
              <strong>Lifetime Access:</strong> 12 months of non-stop learning
            </li>
          </ul>
        </div>

        <div className="success-footer">
          <p className="auto-redirect">
            Redirecting to dashboard in <strong>{countdown}s</strong>...
          </p>
          <button className="home-btn" onClick={() => navigate("/")}>
            Go to Dashboard Now
          </button>
        </div>

        <div className="receipt-info">
          <p>
            💡 <strong>Tip:</strong> A receipt has been sent to your email.
            Check your inbox for the payment confirmation.
          </p>
        </div>
      </div>
    </div>
  );
}
