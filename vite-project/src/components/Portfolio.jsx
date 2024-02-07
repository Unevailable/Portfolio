// Importing React and the CSS module for styling
import React from 'react';
import './Portfolio.css';

// Functional component for the Portfolio section
const Portfolio = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      image: 'https://via.placeholder.com/150',
      description: 'This is a description of project 1.',
      languages: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/user/repo1',
      site: 'https://example.com/project1',
    },
    {
      id: 2,
      name: 'Project 2',
      image: 'https://via.placeholder.com/150',
      description: 'This is a description of project 2.',
      languages: ['React', 'Node.js', 'Express'],
      github: 'https://github.com/user/repo2',
      site: 'https://example.com/project2',
    },
    {
      id: 3,
      name: 'Project 3',
      image: 'https://via.placeholder.com/150',
      description: 'This is a description of project 3.',
      languages: ['Python', 'Django'],
      github: 'https://github.com/user/repo3',
      site: 'https://example.com/project3',
    },
    {
      id: 4,
      name: 'Project 4',
      image: 'https://via.placeholder.com/150',
      description: 'This is a description of project 4.',
      languages: ['PHP', 'Laravel'],
      github: 'https://github.com/user/repo4',
      site: 'https://example.com/project4',
    },
  ];

  return (
    <section className="portfolio">
      {/* Heading for the Portfolio section */}
      <h2>Portfolio</h2>
      
      {/* Grid layout for projects, divided into two columns */}
      <div className="projects">
        {/* First column of projects */}
        <div className="project-column">
          {projects.slice(0, 2).map((project) => (
            <div key={project.id} className="project-card">
              {/* Project image */}
              <img src={project.image} alt={project.name} />
              {/* Project name */}
              <h3>{project.name}</h3>
              {/* Project description */}
              <p>{project.description}</p>
              {/* List of project languages */}
              <ul>
                {project.languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
              {/* Buttons section with links to GitHub Repo and project site */}
              <div className="buttons">
                <a href={project.github} target="_blank" rel="noreferrer">
                  Visit GitHub Repo
                </a>
                <a href={project.site} target="_blank" rel="noreferrer">
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Second column of projects */}
        <div className="project-column">
          {projects.slice(2, 4).map((project) => (
            <div key={project.id} className="project-card">
              {/* Project image */}
              <img src={project.image} alt={project.name} />
              {/* Project name */}
              <h3>{project.name}</h3>
              {/* Project description */}
              <p>{project.description}</p>
              {/* List of project languages */}
              <ul>
                {project.languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
              {/* Buttons section with links to GitHub Repo and project site */}
              <div className="buttons">
                <a href={project.github} target="_blank" rel="noreferrer">
                  Visit GitHub Repo
                </a>
                <a href={project.site} target="_blank" rel="noreferrer">
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Exporting the Portfolio component for use in other parts of the application
export default Portfolio;
