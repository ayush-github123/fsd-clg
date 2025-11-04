import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav id="nav">
      <div id="logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      <ul id="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Blogs</li>
        <li>Contact Us</li>
      </ul>

      <div id="auth-buttons">
        <button className="auth-btn">Register</button>
        <button className="auth-btn">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
