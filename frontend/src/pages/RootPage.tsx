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

  // If authenticated, show home page
  return <HomePage />;
}
