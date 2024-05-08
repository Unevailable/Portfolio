// Importing React and the CSS module for styling
import React from 'react';
import './Portfolio.css';

// Functional component for the Portfolio section
const Portfolio = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      name: 'My Media Favorites',
      image: '../my-media-fav-screenshot.png',
      description: 'A web application designed to allow a user to pick any movie or book they choose to search for, display some general information about the searched piece of media, and then allow the user to add the media to either their favorite book or favorite movie list. This data is then saved and persisted over local storage.',
      languages: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/mforte215/my-media-library',
      site: 'https://mforte215.github.io/my-media-library/',
    },
    {
      id: 2,
      name: 'The Birds of Freedom',
      image: '../freedom.PNG',
      description: 'The main focus of this website is to inform people about the Bangladesh Liberation War. This frontend website was showcased at the 2021 Ctrl+Shift Finals',
      languages: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Unevailable/TheBirdsOfFreedom',
      site: 'https://unevailable.github.io/TheBirdsOfFreedom/index.html',
    },
    {
      id: 3,
      name: 'Demo Swap',
      image: '../demo-swap.PNG',
      description: 'Demo Swap is a unique trading platform, made for Team Fortress 2 players/collectors to find other players looking to trade in-game items.',
      languages: ['TypeScript', 'SQL', 'MySQL', 'Node', 'Express','Handlebars', 'CSS', 'JavaScript' ],
      github: 'https://github.com/ryansauter88/demo-swap',
      site: 'https://demo-swap-354ed4292240.herokuapp.com/',
    },
    {
      id: 4,
      name: 'Book Search Engine',
      image: '/book.PNG',
      description: 'This is a MERN Full-Stack application designed to keep a book library of a user\'s saved/favorited books.',
      languages: ['MERN Stack'],
      github: 'https://github.com/Unevailable/Book-Search-Engine?tab=readme-ov-file',
      site: 'https://book-library-fe.netlify.app',
    },
  ];

  return (
    <section className="portfolio">
      {/* Heading for the Portfolio section */}
      <h2 className="heading-2" >Portfolio</h2>
      
      {/* Grid layout for projects, divided into two columns */}
      <div className="projects">
        {/* First column of projects */}
        <div className="project-column">
          {projects.slice(0, 2).map((project) => (
            <div key={project.id} className="project-card">
              {/* Project image */}
              <img src={project.image} alt={project.name} className="project-image" />
              {/* Project name */}
              <h3>{project.name}</h3>
              {/* Project description */}
              <p>{project.description}</p>
              {/* List of project languages */}
              <ul className="languages">
                {project.languages.map((language, i) => (
                  <li key={i}>{language}</li>
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
              <img src={project.image} alt={project.name} className="project-image" />
              {/* Project name */}
              <h3>{project.name}</h3>
              {/* Project description */}
              <p>{project.description}</p>
              {/* List of project languages */}
              <ul className="languages">
                {project.languages.map((language, i) => (
                  <li key={i}>{language}</li>
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
