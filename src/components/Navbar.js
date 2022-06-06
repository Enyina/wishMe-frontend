import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({click}) => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h2><Link to='/'>Wish Me</Link></h2>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/wishlist" className="wish-link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Wishes<span className="wishlogo-badge">0</span>
            </span>
          </Link>
        </li>

        <li>
          <Link to="/products" className="store">Gift Ideas</Link>
        </li>

        <li>
          <Link to="/">
            <i></i>
          </Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div className="hamburger-menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
