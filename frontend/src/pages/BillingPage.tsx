import { useAuth } from "../context/useAuth";
import "./BillingPage.css";

export function BillingPage() {
  const { user } = useAuth();

  // Get subscription details from localStorage
  const subscriptionData = localStorage.getItem("subscription_details");
  const subscription = subscriptionData ? JSON.parse(subscriptionData) : null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getRemainingDays = () => {
    if (!subscription?.expiryDate) return 0;
    const expiry = new Date(subscription.expiryDate);
    const today = new Date();
    const diff = expiry.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  const remainingDays = getRemainingDays();
  const isSubscriptionActive = remainingDays > 0;

  return (
    <div className="billing-container">
      <div className="billing-card">
        <div className="billing-header">
          <h1>💰 Billing & Subscription</h1>
          <p>Manage your account and subscription</p>
        </div>

        {/* Account Information */}
        <div className="section">
          <h2>Account Information</h2>
          <div className="info-box">
            <div className="info-item">
              <span className="label">Email Address</span>
              <span className="value">{user?.email}</span>
            </div>
          </div>
        </div>

        {/* Subscription Status */}
        {subscription ?
          <div className="section">
            <h2>Current Subscription</h2>
            <div className="subscription-box">
              <div className="status-badge">
                <span
                  className={`badge ${isSubscriptionActive ? "active" : "expired"}`}
                >
                  {isSubscriptionActive ? "✅ Active" : "❌ Expired"}
                </span>
              </div>

              <div className="subscription-details">
                <div className="detail-item">
                  <span className="label">📋 Plan Type</span>
                  <span className="value">
                    {subscription.planType || "Annual"}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="label">💵 Amount Paid</span>
                  <span className="value">₹{subscription.amount}.00</span>
                </div>

                <div className="detail-item">
                  <span className="label">📅 Purchase Date</span>
                  <span className="value">
                    {formatDate(subscription.purchaseDate)}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="label">⏰ Expiry Date</span>
                  <span className="value">
                    {formatDate(subscription.expiryDate)}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="label">⏳ Days Remaining</span>
                  <span
                    className={`value ${remainingDays <= 7 ? "warning" : ""}`}
                  >
                    {remainingDays > 0 ? `${remainingDays} days` : "Expired"}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="label">🔄 Auto-Renewal</span>
                  <span className="value">Enabled</span>
                </div>
              </div>

              {remainingDays <= 7 && remainingDays > 0 && (
                <div className="warning-box">
                  <p>
                    ⚠️ Your subscription expires soon! Renew before{" "}
                    {formatDate(subscription.expiryDate)} to continue access.
                  </p>
                </div>
              )}

              {!isSubscriptionActive && (
                <div className="expired-box">
                  <p>
                    ❌ Your subscription has expired. Please renew to access all
                    features.
                  </p>
                </div>
              )}
            </div>
          </div>
        : <div className="section">
            <div className="no-subscription-box">
              <p>No active subscription found.</p>
            </div>
          </div>
        }

        {/* Payment History */}
        <div className="section">
          <h2>Payment History</h2>
          {subscription ?
            <div className="payment-history">
              <div className="history-item">
                <div className="history-left">
                  <span className="date">
                    {formatDate(subscription.purchaseDate)}
                  </span>
                  <span className="description">
                    Annual Subscription Payment
                  </span>
                </div>
                <div className="history-right">
                  <span className="amount">₹{subscription.amount}.00</span>
                  <span className={`status ${subscription.paymentStatus}`}>
                    {subscription.paymentStatus === "completed" ? "✅" : "❌"}{" "}
                    {subscription.paymentStatus}
                  </span>
                </div>
              </div>
            </div>
          : <p style={{ color: "#cbd5e1" }}>No payment history available.</p>}
        </div>

        {/* Features Information */}
        <div className="section">
          <h2>What's Included in Your Subscription</h2>
          <div className="features-list">
            <div className="feature-item">
              <span className="icon">✅</span>
              <span>Access to all 36 lessons</span>
            </div>
            <div className="feature-item">
              <span className="icon">✅</span>
              <span>4 complete learning modules</span>
            </div>
            <div className="feature-item">
              <span className="icon">✅</span>
              <span>Advanced analysis tools</span>
            </div>
            <div className="feature-item">
              <span className="icon">✅</span>
              <span>Completion certificates</span>
            </div>
            <div className="feature-item">
              <span className="icon">✅</span>
              <span>Community access</span>
            </div>
            <div className="feature-item">
              <span className="icon">✅</span>
              <span>12 months of content updates</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
