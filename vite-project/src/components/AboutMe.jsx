// src/components/AboutMe.jsx
import React from 'react';
import style from './Header.css';

const AboutMe = () => {
  return (
    <section className={style.aboutMe}>
      <h2 className={style.heading}>About Me</h2>
      <div className={style.textContainer}>
        <p className={style.text}>
          Hello, I'm [Your Name]. I am passionate about [your interests/hobbies]. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla euismod urna in turpis egestas, sit amet aliquam lacus varius.
          Proin vel sem nec nulla tincidunt malesuada non vel libero. Duis in odio ac lacus vestibulum
          fermentum et ac metus.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;