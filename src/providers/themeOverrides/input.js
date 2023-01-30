import { palette } from '../../colors';

export const MuiInputLabel = {
  styleOverrides: {
    root: {
      color: palette.grey
    }
  }
};

export const MuiInputBase = {
  styleOverrides: {
    input: {
      '&:-webkit-autofill': {
        transitionDelay: '9999s',
        transitionProperty: 'background-color, color'
      }
    }
  }
};

export const MuiOutlinedInput = {
  styleOverrides: {
    root: {
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.focused
      },
      '&.Mui-focused .MuiSvgIcon-root': {
        color: palette.focused
      }
    },
    notchedOutline: {
      borderColor: palette.grey,
      borderRadius: '4px'
    }
  }
};

export const MuiFormControl = {
  styleOverrides: {
    root: {
      width: '100%'
    }
  }
};
