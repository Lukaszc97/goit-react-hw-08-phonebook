import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div className={styles.authNav}>
      <NavLink to="/registration" className={styles.navLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={styles.navLink}>
        Log in
      </NavLink>
    </div>
  );
};


