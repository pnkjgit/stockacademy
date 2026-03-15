import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import "./Header.css";

export function Header() {
  const { user, isAuthenticated, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Hide header on login and signup pages
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <header className="appbar">
      <div className="appbar-content">
        <Link to="/" className="appbar-logo">
          📈 StockAcademy
        </Link>
        <nav className="appbar-nav">
          <Link to="/" className="nav-link">
            <span className="nav-icon">🏠</span> Home
          </Link>
          {isAuthenticated && (
            <Link to="/pricing" className="nav-link pricing-link">
              <span className="nav-icon">💳</span> Pricing
            </Link>
          )}
          <Link to="/about" className="nav-link">
            <span className="nav-icon">ℹ️</span> About
          </Link>
          <Link to="/contact" className="nav-link">
            <span className="nav-icon">📧</span> Contact
          </Link>
        </nav>

        {/* Auth Section */}
        <div className="auth-section">
          {isAuthenticated && user ?
            <div className="user-menu">
              <span className="user-email">👤 {user.email}</span>
              <button
                className="logout-btn"
                onClick={handleLogout}
                title="Logout"
              >
                Logout
              </button>
            </div>
          : <div className="auth-links">
              <Link to="/login" className="auth-btn login-btn">
                Login
              </Link>
              <Link to="/signup" className="auth-btn signup-btn">
                Sign Up
              </Link>
            </div>
          }
        </div>
      </div>
    </header>
  );
}
