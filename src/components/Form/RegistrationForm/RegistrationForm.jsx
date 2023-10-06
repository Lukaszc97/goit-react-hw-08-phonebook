import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from "../../../Redux/auth/operations";
import styles from './Registration.module.css'; 

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  }

  return (
    <form className={styles.formContainer} onSubmit={handleRegistration}>
      <label className={styles.label}>
        Username
        <input
          type="text"
          name="name"
          placeholder="name"
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          type="email"
          name="email"
          placeholder="email"
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          type="password"
          name="password"
          placeholder="password"
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.button}>Registration</button>
    </form>
  );
};
