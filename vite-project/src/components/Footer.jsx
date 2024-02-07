// src/components/Footer.jsx
import React from 'react';
import styles from './Footer.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p> A React Portfolio Created By Al Amin</p>
      <div>
        <a href="https://www.linkedin.com/in/amin-username/" target="_blank" rel="noopener noreferrer">
          <img src="path/to/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/amin-username" target="_blank" rel="noopener noreferrer">
          <img src="path/to/github-icon.png" alt="GitHub" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;