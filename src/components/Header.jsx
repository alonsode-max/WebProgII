import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

function Header({ children }) {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-logo">🗡️ HeroMissions</div>

        <nav className="header-nav">
          <Link to="/" className="header-link">Home</Link>
          <Link to="/login" className="header-link">Login</Link>
          <Link to="/missions" className="header-link">Missions</Link>
          <Link to="/about" className="header-link">About</Link>
          <Link to="/contact" className="header-link">Contact</Link>
        </nav>
      </div>

      <div className="header-content">
        {children}
      </div>
    </header>
  );
}

export default Header;
