import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Header.css";
import { UserContext } from "../context/UserContext";

function Header({ children }) {
  const { userLog, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();        
    navigate("/");   
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-logo">🗡️ HeroMissions</div>

        <nav className="header-nav">
          <Link to="/" className="header-link">Home</Link>
          <Link to="/missions" className="header-link">Missions</Link>
          <Link to="/about" className="header-link">About</Link>
          <Link to="/contact" className="header-link">Contact</Link>

          {userLog ? (
            <>
              <Link to="/profile" className="header-link">Profile</Link>
              <button onClick={handleLogout} className="header-link logout-btn">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="header-link">Login</Link>
          )}
        </nav>
      </div>

      <div className="header-content">{children}</div>
    </header>
  );
}

export default Header;