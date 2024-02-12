// Footer.jsx

// Importing React and the CSS module for styling
import React from 'react';
import styles from './Footer.css'; // Update import to match the correct CSS file

// Functional component for the Footer section
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p> A React Portfolio Created By Al Amin</p>

      {/* Links to social media profiles */}
      <div>
        {/* LinkedIn link with target="_blank" for opening in a new tab */}
        <a href="https://www.linkedin.com/in/al-amin-4229ab217/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
          LinkedIn
        </a>
        
        {/* GitHub link with target="_blank" for opening in a new tab */}
        <span style={{ marginLeft: '20px' }}>
          <a href="https://github.com/Unevailable" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            GitHub
          </a>
        </span>
      </div>
    </footer>
  );
};

// Exporting the Footer component for use in other parts of the application
export default Footer;
