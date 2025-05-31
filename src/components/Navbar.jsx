import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg"; // ✅ Correct path if logo is in src/assets
import "./Navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-left d-flex align-items-center">
          <img src={logo} alt="Logo" className="logo-glow" />
          <span className="brand-name">SeaSkyDeluxe</span>
        </div>

        {/* Desktop Links */}
        <ul className="navbar-links">
          <li>
            <NavLink to="/" onClick={closeSidebar} className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeSidebar} className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/rooms" onClick={closeSidebar} className={({ isActive }) => (isActive ? "active" : "")}>
              Rooms
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" onClick={closeSidebar} className={({ isActive }) => (isActive ? "active" : "")}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeSidebar} className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Toggle */}
        <div className="menu-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? <span className="close-icon">&times;</span> : <span className="hamburger">&#9776;</span>}
        </div>
      </nav>

      {/* Sidebar Overlay for Mobile */}
      <div className={`sidebar-overlay ${isSidebarOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={closeSidebar}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeSidebar}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/rooms" onClick={closeSidebar}>
              Rooms
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" onClick={closeSidebar}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeSidebar}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
