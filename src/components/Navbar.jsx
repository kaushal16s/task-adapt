import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const toggleMenu = () => {
    const menu = document.getElementById('js-menu');
    menu.classList.toggle('active');
  };

  return (
    <div>
      <nav className="navbar">
        <span className="navbar-toggle" id="js-navbar-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </span>
        <div className="logo">
          <img src="adapt.png" alt="Description of the image" />
        </div>
        <ul className="main-nav" id="js-menu">
          <li>
            <Link to="/ContactSearch" className="nav-links">Contact Search</Link>
          </li>
          <li>
            <Link to="/Company" className="nav-links">Company Search</Link>
          </li>
          <li>
            <Link to="/MyList" className="nav-links">My List</Link>
          </li>
          <li>
            <Link to="/Integration" className="nav-links">Integration</Link>
          </li>
          <li>
            <Link to="/Conceige" className="nav-links">Concierge</Link>
          </li>
        </ul>
        <div className="button">
          <button>Update now</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
