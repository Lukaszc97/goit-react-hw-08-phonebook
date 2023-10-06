import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nagigation.module.css'; 

export const Navigation = () => {
  return (
    <nav className={styles.nav}> 
      <NavLink to="/" className={styles.NavLink}>Home</NavLink>
      <NavLink to="/tasks" className={styles.NavLink}>Phonebook</NavLink> 
    </nav>
  );
};
