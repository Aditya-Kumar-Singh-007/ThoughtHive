import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// make sure this path matches where you save the CSS

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <nav className="modern-nav" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <Link className="brand" to="/">
          ThoughtHive
        </Link>

        <ul className="nav-links" role="menubar" aria-label="Primary">
          <li role="none">
            <Link role="menuitem" className={isActive("/")} to="/">
              Home
            </Link>
          </li>
          <li role="none">
            <Link role="menuitem" className={isActive("/about")} to="/about">
              About
            </Link>
          </li>
        </ul>

        <div className="nav-auth" aria-hidden={false}>
          {!localStorage.getItem("token") ? (
            <>
              <Link className="auth-btn" to="/login">
                Login
              </Link>
              <Link className="auth-btn outline" to="/signup">
                SignUp
              </Link>
            </>
          ) : (
            <button className="auth-btn logout" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
