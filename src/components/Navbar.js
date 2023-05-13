import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <div className={styles.navbar}>
    <NavLink to="/" className={styles.heading}>
      Bookstore CMS
    </NavLink>
    <NavLink
      to="/"
      className={styles.book}
      style={({ isActive }) => ({ color: isActive ? '#121212' : 'grey' })}
    >
      Books
    </NavLink>
    <NavLink
      to="/categories"
      className={styles.category}
      style={({ isActive }) => ({ color: isActive ? '#121212' : 'grey' })}
    >
      Categories
    </NavLink>

    <div className={styles.icon}>
      <ImUser
        style={{
          color: '#0290ff',
          fontSize: '3rem',
          padding: '0.5rem',
          cursor: 'pointer',
        }}
      />
    </div>
  </div>
);

export default Navbar;
