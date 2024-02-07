// src/components/AboutMe.jsx
import React from 'react';
import style from './AboutMe.css';

const AboutMe = () => {
  return (
    <section className={style.aboutMe}>
      <h2 className={style.heading}>About Me</h2>
      <div className={style.textContainer}>
        <p className={style.text}>
          Greetings! I'm Al Amin, aspiring to become a proficient full-stack developer. My journey commenced in high school, where I delved into crafting webpages using HTML, CSS, and JS, even participating in various webpage competitions. As I progressed through college, my focus shifted to backend development, immersing myself in languages like C and Python. My ultimate aspiration is to leverage my coding expertise to contribute to the realm of space exploration.
        </p>
        <img src="./public/Al.JPG" alt="Photo of Al Amin" className={style.photo} />
      </div>
    </section>
  );
};

export default AboutMe;
