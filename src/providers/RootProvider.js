import React from 'react';
import ThemeProvider from './ThemeProvider';
import StyledSnackbarProvider from './SnackbarProvider';
import LocalizationProvider from './LocalizationProvider';
export default function RootProvider({ children }) {
  return (
    <ThemeProvider>
      <LocalizationProvider>
        <StyledSnackbarProvider>{children}</StyledSnackbarProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
