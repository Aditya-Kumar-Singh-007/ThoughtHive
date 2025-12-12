import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLightMode, setIsLightMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    
    setIsDropdownOpen(false);
  };

  const isActive = (path) => (location.pathname === path ? "active" : "");

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseLightMode = savedTheme === 'light' || (!savedTheme && !systemPrefersDark);
    
    setIsLightMode(shouldUseLightMode);
    document.documentElement.classList.toggle('light-theme', shouldUseLightMode);
  }, []);

  const toggleTheme = () => {
    const newLightMode = !isLightMode;
    setIsLightMode(newLightMode);
    document.documentElement.classList.toggle('light-theme', newLightMode);
    localStorage.setItem('theme', newLightMode ? 'light' : 'dark');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <button onClick={toggleTheme} className="create-btn-corner">
        <img 
          src={isLightMode ? '/light.png' : '/dark.png'} 
          alt={isLightMode ? 'Light mode active' : 'Dark mode active'}
        />
      </button>
      <nav className="modern-nav">
        <div className="nav-inner">
          <Link className="brand" to="/" onClick={closeDropdown}>
            ThoughtHive
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            <li>
              <Link className={isActive("/")} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={isActive("/about")} to="/about">
                About
              </Link>
            </li>
          </ul>

          <div className="nav-auth">
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

          {/* Mobile Dropdown */}
          <div className="nav-dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              ☰
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link className={isActive("/")} to="/" onClick={closeDropdown}>
                  Home
                </Link>
                <Link className={isActive("/about")} to="/about" onClick={closeDropdown}>
                  About
                </Link>
                {!localStorage.getItem("token") ? (
                  <>
                    <Link to="/login" onClick={closeDropdown}>
                      Login
                    </Link>
                    <Link to="/signup" onClick={closeDropdown}>
                      SignUp
                    </Link>
                  </>
                ) : (
                  <button className="dropdown-logout" onClick={handleLogout}>
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;