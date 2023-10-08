import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../Redux/auth/operations';
import { Container, Typography, Button } from '@mui/material'; 
import TextInput from '../textInput'; // 

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h5">Login</Typography>
      <form onSubmit={handleSubmit}>
        
        <TextInput
          name="email"
          label="Email"
          placeholder="email"
          type="email"
        />
        <TextInput
          name="password"
          label="Password"
          placeholder="password"
          type="password"
        />
      
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
