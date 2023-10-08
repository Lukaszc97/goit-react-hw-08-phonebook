import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from "../../../Redux/auth/operations";
import { Container, Typography, Button } from '@mui/material'; 
import TextInput from '../textInput'; 

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
    <Container component="main" maxWidth="xs">
      <Typography variant="h5">Registration</Typography>
      <form onSubmit={handleRegistration}>
        <TextInput
          name="name"
          label="Username"
          placeholder="name"
          type="text"
        />
        <TextInput
          name="email"
          label="Email Address"
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
          Registration
        </Button>
      </form>
    </Container>
  );
};
