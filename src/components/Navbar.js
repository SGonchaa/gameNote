import React from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/">ASUS ROG/TUF</a>
        </li>
        <li className="navbar-item">
          <a href="/">MSI GAMING</a>
        </li>
        <li className="navbar-item">
          <a href="/">ACER PREDATOR/NITRO</a>
        </li>
        <li className="navbar-item">
          <a href="/">ALIENWARE</a>
        </li>
        <li className="navbar-item">
          <a href="/">LENOVO</a>
        </li>
        <li className="navbar-item">
          <a href="/">RAZER</a>
        </li>
        <li className="navbar-item">
          <a href="/">SURFACE</a>
        </li>
        <li className="navbar-item">
          <a href="/">Aksesuarlar</a>
        </li>
        <li className="navbar-item">
          <a href="/">NVIDIA</a>
        </li>
        <li className="navbar-item">
          <a href="/">ASUS ROG</a>
        </li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Məhsul və ya brend axtar" />
        <div className="search-icon">
          <FaSearch className="search"></FaSearch>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
