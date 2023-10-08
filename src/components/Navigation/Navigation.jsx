import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

export const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
      
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/contacts" color="inherit">
          Phonebook
        </Button>
     {/*  * <Button component={Link} to="/UserProfile" color="inherit">
         Change Name
        </Button>  */}
      </Toolbar>
    </AppBar>
  );
};
