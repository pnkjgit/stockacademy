import { useLocation } from "react-router-dom";
import "./Footer.css";

export function Footer() {
  const location = useLocation();

  // Hide footer on login and signup pages
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p className="footer-copyright">
            © 2026 StockAcademy. Developed by <span>Pankaj Sharma</span>
          </p>
          <p className="footer-tagline">
            Making stock market education accessible to everyone in India 📈
          </p>
        </div>
      </div>
    </footer>
  );
}
