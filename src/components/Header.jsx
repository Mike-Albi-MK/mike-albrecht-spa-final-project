import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header-container">
      <Navbar />
    </header>
  );
};

export default Header;