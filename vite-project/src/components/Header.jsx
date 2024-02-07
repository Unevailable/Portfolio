// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Al Amin</h1>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          About Me
        </Link>
        <Link to="/portfolio" className={styles.link}>
          Portfolio
        </Link>
        <Link to="/contact" className={styles.link}>
          Contact
        </Link>
        <Link to="/resume" className={styles.link}>
          Resume
        </Link>
      </nav>
    </header>
  );
};

export default Header;