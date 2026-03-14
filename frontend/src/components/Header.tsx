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
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
