import React from 'react';
import { TextField } from '@mui/material';

export default function TextInput({
  size = 'small',
  variant = 'outlined',
  color = 'mint',
  autoComplete = 'off',
  ...props
}) {
  return (
    <TextField size={size} variant={variant} color={color} autoComplete={autoComplete} {...props} />
  );
}
