import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Navbar = () => {
  let location=useLocation()

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            ThoughtHive
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="nav-buttons">
              <button className="btn signup-btn ">Sign Up</button>
              <button className="btn login-btn">Login</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
