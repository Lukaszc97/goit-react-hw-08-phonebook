import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { UserMenu } from 'components/Usermenu/UserMenu';

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
        <Box flexGrow={1} />
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
};
