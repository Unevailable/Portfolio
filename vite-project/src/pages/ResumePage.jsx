// src/pages/ResumePage.jsx
import React from 'react';
import Header from '../components/Header';
import Resume from '../components/Resume';
import Footer from '../components/Footer';

const ResumePage = () => {
  return (
    <div className="page">
      <Header />
      <Resume />
      <Footer />
    </div>
  );
};

export default ResumePage;
