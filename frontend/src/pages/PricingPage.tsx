import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import "./PricingPage.css";

export function PricingPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSubscribe = () => {
    navigate("/payment");
  };

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>🎓 Unlock Premium Content</h1>
        <p>Start learning with unlimited access to all courses</p>
      </div>

      <div className="pricing-card">
        <div className="pricing-badge">BEST VALUE</div>

        <div className="plan-header">
          <h2>Annual Plan</h2>
          <div className="price-section">
            <span className="currency">₹</span>
            <span className="amount">99</span>
            <span className="period">/year</span>
          </div>
        </div>

        <div className="pricing-divider"></div>

        <ul className="features-list">
          <li>✅ Unlimited access to all courses</li>
          <li>✅ 36+ comprehensive lessons</li>
          <li>✅ Learn at your own pace</li>
          <li>✅ Lifetime access to materials</li>
          <li>✅ Certificate of completion</li>
          <li>✅ Email support</li>
          <li>✅ Free updates forever</li>
        </ul>

        <div className="payment-methods">
          <h3>Payment Methods Accepted:</h3>
          <div className="methods">
            <span className="method upi">📱 UPI</span>
            <span className="method paytm">💳 PayTM</span>
            <span className="method credit">💰 Credit/Debit Card</span>
          </div>
        </div>

        <button className="subscribe-btn" onClick={handleSubscribe}>
          Continue to Payment
        </button>

        <div className="user-info">
          <p>
            Account: <strong>{user?.email}</strong>
          </p>
        </div>
      </div>

      <div className="pricing-footer">
        <p>
          💡 Secure payment powered by <strong>Razorpay</strong>
        </p>
        <p>🔒 Your payment information is completely secure</p>
      </div>
    </div>
  );
}
