import React from 'react';
import { useDispatch } from 'react-redux';
import {register} from "../../Redux/auth/operations"

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
       }));

    form.reset();
  }

  return (
    <form onSubmit={handleRegistration}>
      <label>
        Username
        <input type="text"
        name="name"
        placeholder="name"/>
       
        </label>
      <label>
        Email
        <input type="email"
        name='email'
        placeholder="email"
        ></input>
        
        </label>
      <label>
        Password
        <input type="password"
        name="password"
        placeholder="password"
         />
     
        </label>
      <button type="submit">Registration</button>
    </form>
  );
};
