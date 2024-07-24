import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navigation">
        <ul>
            <li>
                <NavLink to='/'>HOME</NavLink>
            </li>
            <li>
                <NavLink to='/search-form'>SEARCH CHORD</NavLink>
            </li>
            <li>
                <NavLink to='/song-list'>LEARN SONGS</NavLink>
            </li>
            <li>
                <NavLink to="/favorites">FAVORITE CHORDS</NavLink>
            </li>
            <li>
                <NavLink to="/contact">CONTACT</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar