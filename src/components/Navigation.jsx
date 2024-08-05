import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end activeClassName="active">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
