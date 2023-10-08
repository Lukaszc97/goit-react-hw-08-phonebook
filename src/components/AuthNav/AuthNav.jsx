import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material"; 


export const AuthNav = () => {
  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        component={NavLink}
        to="/registration"
       
      >
        Register
      </Button>
      <Button
        variant="outlined"
        color="primary"
        component={NavLink}
        to="/login"
        
      >
        Log in
      </Button>
    </div>
  );
};
