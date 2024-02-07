import React from 'react';
import styles from './Footer.css'; // Update import to match the correct CSS file

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p> A React Portfolio Created By Al Amin</p>
      <div>
        <a href="https://www.linkedin.com/in/al-amin-4229ab217/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
          LinkedIn
        </a>
        <span style={{ marginLeft: '20px' }}>
          <a href="https://github.com/Unevailable" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            GitHub
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;