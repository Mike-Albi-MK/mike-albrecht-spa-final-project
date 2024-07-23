import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header-container">
          <Navbar />
            <main>
              <Outlet />
            </main>
            
    </header>
  );
};

export default Header;