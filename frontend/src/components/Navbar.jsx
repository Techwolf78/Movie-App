import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" style={{
          fontSize: '30px',
          '@media (max-width: 768px)': {
            fontSize: '25px',
          },
          '@media (max-width: 480px)': {
            fontSize: '20px',
          },
        }}>
          TheatreTonic
        </Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/movies" style={{
            fontSize: '18px',
            '@media (max-width: 768px)': {
              fontSize: '16px',
            },
            '@media (max-width: 480px)': {
              fontSize: '14px',
            },
          }}>
            Movies
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" style={{
            fontSize: '18px',
            '@media (max-width: 768px)': {
              fontSize: '16px',
            },
            '@media (max-width: 480px)': {
              fontSize: '14px',
            },
          }}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" style={{
            fontSize: '18px',
            '@media (max-width: 768px)': {
              fontSize: '16px',
            },
            '@media (max-width: 480px)': {
              fontSize: '14px',
            },
          }}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;