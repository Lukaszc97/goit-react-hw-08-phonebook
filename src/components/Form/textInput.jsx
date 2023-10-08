import React from 'react';
import { TextField } from '@mui/material';

const TextInput = ({ name, label, placeholder, type }) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name={name}
      label={label}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default TextInput;
