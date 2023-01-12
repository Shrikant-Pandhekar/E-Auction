import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="conatainer">
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            E-Auction
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`${isMenuOpen ? "collapse" : ""} navbar-collapse`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </div>
            <div className="navbar-nav">
              <NavLink to="/add-product" className="nav-link">
                Add Product
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
