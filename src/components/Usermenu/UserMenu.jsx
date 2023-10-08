import React from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from '../../Redux/auth/operations';
import { Button, Box } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => dispatch(logOut());

  const buttonStyle = {
    backgroundColor: 'red', 
      color: 'white', 
    marginLeft: '20px',
  };

  return (
    <Box display="flex" alignItems="center">
      <p>Welcome {user.name}</p>
      <Button variant="outlined" style={buttonStyle} onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};
