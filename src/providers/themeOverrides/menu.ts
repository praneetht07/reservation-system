import { Fade } from '@mui/material';
import { palette } from 'src/colors';

export const MuiMenu = {
  styleOverrides: {
    paper: {
      borderRadius: 0,
      border: `2px solid ${palette.focused}`,
      backgroundColor: palette.darkBackground
    },
    list: {
      '.Mui-selected': {
        color: palette.darkBackground,
        backgroundColor: `${palette.focused} !important`,
        fontWeight: 'bold'
      }
    }
  },
  defaultProps: {
    color: 'inherit',
    TransitionComponent: Fade
  }
};

export const MuiAutocomplete = {
  styleOverrides: {
    paper: {
      backgroundColor: palette.darkBackground
    },
    option: {
      '&[aria-selected="true"]': {
        color: palette.darkBackground,
        backgroundColor: `${palette.focused} !important`,
        fontWeight: 'bold'
      }
    },
    inputRoot: {
      '&.Mui-focused': {
        backgroundColor: palette.darkBackground
      }
    }
  }
};
