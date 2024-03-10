// src/components/AboutMe.jsx
import React from 'react';
import './Resume.css'; // Import the CSS file

const Resume = () => {
  return (
    <section className="resume-section">
      <div>
        <h2 className="Resume-Heading" >Resume</h2>
      </div>
      <div className="download-section">
        <a href="./public/Resume - Al Amin.pdf" download>
          <h3 className="resume-subheading">Download my resume</h3>
        </a>
      </div>
      <div className="frontend-skills-section">
        <h3 className="resume-frontend">Frontend Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="backend-skills-section">
        <h3 className="resume-backend">Backend Skills</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
