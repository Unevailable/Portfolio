// Importing React, Link from 'react-router-dom', and the CSS module for styling
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

// Functional component for the Header section
const Header = () => {
  return (
    <header className={styles.header}>
      {/* Title heading for the portfolio */}
      <h1 className={styles.title}>Al Amin</h1>

      {/* Navigation menu using React Router Links */}
      <nav className={styles.nav}>
        {/* Link to the About Me section */}
        <Link to="/" className={styles.link}>
          About Me
        </Link>
        {/* Link to the Portfolio section */}
        <Link to="/portfolio" className={styles.link}>
          Portfolio
        </Link>
        {/* Link to the Contact section */}
        <Link to="/contact" className={styles.link}>
          Contact
        </Link>
        {/* Link to the Resume section */}
        <Link to="/resume" className={styles.link}>
          Resume
        </Link>
      </nav>
    </header>
  );
};

// Exporting the Header component for use in other parts of the application
export default Header;
