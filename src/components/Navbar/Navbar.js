import React from "react";
import "./Navbar.css"; 
import { FaBars, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Hamburger Menu */}
      <div className="nav-left">
        <FaBars className="icon" />
      </div>

      {/* Logo */}
      <div className="nav-center">
        <span className="logo-blue">ma</span>
        <span className="logo-red">x</span>
      </div>

      {/* Icons */}
      <div className="nav-right">
        <FaSearch className="icon" />
        <FaHeart className="icon" />
        <FaShoppingCart className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;