import React from 'react';
import { useSelector } from 'react-redux';
import { selectorIsLoggedIn } from '../../Redux/auth/selectors';

const Home = () => {

  const isLoggedIn = useSelector(selectorIsLoggedIn);

  return (
    <div>
      <h2>Welcome to the Phonebook App!</h2>
      <p>This is your personal phonebook application.</p>

      {!isLoggedIn && <p>Please log in or register to access your contacts.</p>}
    </div>
  );
};

export default Home;
