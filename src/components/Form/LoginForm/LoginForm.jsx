import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../Redux/auth/operations';
import styles from './LoginFrom.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({ 
        email: form.elements.email.value,
        password: form.elements.password.value 
      })
    );
    form.reset();
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Email
        <input
          type="email"
          name="email"
          className={styles.input}
          placeholder="email"
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          type="password"
          name="password"
          className={styles.input}
          placeholder="password"
        />
      </label>
      <button type="submit" className={styles.button}>Login</button>
    </form>
  );
};

export default LoginForm;
