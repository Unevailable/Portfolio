// src/pages/PortfolioPage.jsx
import React from 'react';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const PortfolioPage = () => {
  return (
    <div className="page">
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
