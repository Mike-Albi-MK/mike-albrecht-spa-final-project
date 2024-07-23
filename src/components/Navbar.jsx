import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navigation">
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/search-form'>Search Chord</NavLink>
            </li>
            <li>
                <NavLink to="/favorites">Favorite Chords</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar