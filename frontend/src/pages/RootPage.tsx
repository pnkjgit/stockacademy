import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { HomePage } from "../pages/HomePage";

export function RootPage() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Check if user has completed subscription payment
  const subscriptionCompleted =
    localStorage.getItem("subscription_completed") === "true";

  // If authenticated but no subscription, redirect to pricing page
  if (!subscriptionCompleted) {
    return <Navigate to="/pricing" replace />;
  }

  // If authenticated and has subscription, show home page
  return <HomePage />;
}
