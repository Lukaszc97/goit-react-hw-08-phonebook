import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../Redux/auth/operations';

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
    )
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
