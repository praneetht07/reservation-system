import { palette } from 'src/colors';

export const MuiCalendarPicker = {
  styleOverrides: {
    root: {
      backgroundColor: palette.orange
    },
    viewTransitionContainer: {
      backgroundColor: palette.orange
    }
  }
};

export const MuiPickersDay = {
  styleOverrides: {
    root: {
      backgroundColor: palette.orange,
      '&.Mui-selected': {
        backgroundColor: `${palette.cta}!important`
      }
    },
    viewTransitionContainer: {
      backgroundColor: palette.orange
    }
  }
};
