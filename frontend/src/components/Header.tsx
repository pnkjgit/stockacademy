import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
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
          <Link to="/about" className="nav-link">
            <span className="nav-icon">ℹ️</span> About
          </Link>
          <Link to="/contact" className="nav-link">
            <span className="nav-icon">📧</span> Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
