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
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
