import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css'; // Correct relative path to Navbar.css

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Alexandria's Recipe Finder</Link>
      <Link to="/search" className="search-link">Search</Link>
    </nav>
  );
}

export default Navbar;
