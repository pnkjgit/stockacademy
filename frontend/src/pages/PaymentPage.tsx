import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import "./PaymentPage.css";

export function PaymentPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Get API base URL from environment or use deployed backend for production
  const API_BASE_URL =
    import.meta.env.VITE_API_URL || "https://stockacademy-backend.onrender.com";

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    try {
      setLoading(true);
      setError("");

      // Razorpay API Key - Get from environment variable
      const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;

      if (!RAZORPAY_KEY_ID) {
        setError("⚠️ Payment configuration missing. Please contact support.");
        setLoading(false);
        return;
      }

      // Create order on backend
      const response = await fetch(`${API_BASE_URL}/api/payment/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 99 * 100, // Amount in paise (99 INR = 9900 paise)
          currency: "INR",
          userEmail: user?.email,
          userId: user?.id,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      const orderData = await response.json();

      // Configure Razorpay options
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: 99 * 100, // Amount in paise
        currency: "INR",
        name: "StockAcademy",
        description: "Annual Subscription - Learn Stock Market",
        order_id: orderData.orderId,
        prefill: {
          email: user?.email || "",
          contact: "", // User can add if needed
        },
        theme: {
          color: "#3b82f6",
        },
        handler: async (response: any) => {
          try {
            // Verify payment on backend
            const verifyResponse = await fetch(
              `${API_BASE_URL}/api/payment/verify`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  orderId: orderData.orderId,
                  paymentId: response.razorpay_payment_id,
                  signature: response.razorpay_signature,
                  userId: user?.id,
                }),
              },
            );

            if (verifyResponse.ok) {
              // Payment successful
              navigate("/payment-success");
            } else {
              setError("Payment verification failed. Please contact support.");
            }
          } catch (err) {
            setError("Error processing payment. Please try again.");
            console.error(err);
          } finally {
            setLoading(false);
          }
        },
      };

      // Open Razorpay checkout
      if (window.Razorpay) {
        const razorpay = new window.Razorpay(options);
        razorpay.open();
      }
    } catch (err: any) {
      setError(err.message || "Payment failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <div className="payment-header">
          <h1>Complete Your Payment</h1>
          <p>Secure checkout for StockAcademy Annual Subscription</p>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-item">
            <span>Annual Subscription Plan</span>
            <span>₹99.00</span>
          </div>
          <div className="summary-item total">
            <span>Total Amount</span>
            <span>₹99.00</span>
          </div>
        </div>

        {error && (
          <div className="error-message">
            <span>❌</span>
            <p>{error}</p>
          </div>
        )}

        <div className="payment-info">
          <h3>Account Information</h3>
          <div className="info-box">
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
            <p>
              <strong>Plan Type:</strong> Annual (1 Year)
            </p>
            <p>
              <strong>Renewal:</strong> Auto-renewal enabled
            </p>
          </div>
        </div>

        <div className="payment-methods-info">
          <h3>💳 Accepted Payment Methods</h3>
          <ul>
            <li>
              📱 <strong>UPI</strong> - Google Pay, PhonePe, Paytm
            </li>
            <li>
              💳 <strong>Credit/Debit Cards</strong> - Visa, Mastercard, Amex
            </li>
            <li>
              💰 <strong>Wallets</strong> - Paytm, Airtel Money, MobiKwik
            </li>
            <li>
              🏦 <strong>Net Banking</strong> - All major Indian banks
            </li>
          </ul>
        </div>

        <button className="pay-btn" onClick={handlePayment} disabled={loading}>
          {loading ? "Processing..." : "Pay ₹99 Now"}
        </button>

        <div className="payment-footer">
          <p>
            🔒 <strong>Secure Payment</strong> - Your payment is 100% secure and
            encrypted
          </p>
          <p>
            ✅ <strong>Instant Activation</strong> - Access granted immediately
            after payment
          </p>
          <p>
            💡 <strong>Money-back Guarantee</strong> - 7 days money-back
            guarantee if not satisfied
          </p>
        </div>

        <button className="back-btn" onClick={() => navigate("/pricing")}>
          ← Back to Pricing
        </button>
      </div>
    </div>
  );
}

// Type declaration for Razorpay
declare global {
  interface Window {
    Razorpay: any;
  }
}
