import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Navbar';
import { useNavigate } from 'react-router-dom';
import fingerprintGuitar from '../assets/fingerprintguitar.png'; 


const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/search-form');
  };

  return (
    <div>
        <div className="logo">
        <a href="/">
          <h3 id="logo-name">chord spotter</h3>
        </a>
        </div>
            <Header />
              <main className="main-container">
                <img className="fingerprint" src={fingerprintGuitar} alt="a fingerprint with the silhouette of a guitar" />
                  <div className="intro">
                    <h2>Your shortcut to the fretboard</h2>
                    <p>Learn to fret and play chords.</p>
                    <button className="start" onClick={handleButtonClick}>
                      Start here
                    </button>
                  </div>
                 <Outlet />
                </main>

    </div>
  );
};

export default Home;