import React from 'react';

const Header = () => {
  return (
    <header className="header-container">
        <h1>My Guitar Chord Library</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/favorites">Favorite Chords</a>
            </nav>
    </header>
  );
};

export default Header;