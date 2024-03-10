// src/components/AboutMe.jsx

// Importing React and the CSS module for styling
import React from 'react';
import style from './AboutMe.css';

// Functional component for the About Me section
const AboutMe = () => {
  return (
    <section className={style.aboutMe}>
      {/* Heading for the About Me section */}
    <h2 className="heading">About Me</h2>


      {/* Container for text and image */}
      <div className={style.textContainer}>
        {/* Paragraph describing the individual */}
        <p className={style.text}>
          Greetings! I'm Al Amin, aspiring to become a proficient full-stack developer. My journey commenced in high school, where I delved into crafting webpages using HTML, CSS, and JS, even participating in various webpage competitions. As I progressed through college, my focus shifted to backend development, immersing myself in languages like C and Python. I plan to use my coding experience to help explore space. Besides coding, I love riding motorcycles, working on project cars, playing video games, soccer, lacrosse, and occasionally rock climbing. Currently, I ride a Ninja 400 and the project car I'm starting is an MK3 Toyota Supra. Leading to my sports life, I've played in various travel teams. I play left wing and midfielder for soccer and at times I have been a captain for this coming season I will be a co-captain. For lacrosse, I play midfielder and forward.    
        </p>

        {/* Image of the individual */}
        <img src="./Al.JPG" alt="Photo of Al Amin" className="photo" />
      </div>
    </section>
  );
};

// Exporting the AboutMe component for use in other parts of the application
export default AboutMe;
