import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <NavLink to="/">Books</NavLink>
    <NavLink to="/categories">Categories</NavLink>
  </>
);

export default Navbar;
