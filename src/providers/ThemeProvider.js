import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { palette } from '../colors';
import { MuiCalendarPicker, MuiPickersDay } from './themeOverrides/datePicker';
import {
  MuiInputBase,
  MuiInputLabel,
  MuiOutlinedInput,
  MuiFormControl
} from './themeOverrides/input';
import { MuiBackdrop } from './themeOverrides/dialog';
import { MuiPaper } from './themeOverrides/paper';
import { MuiSelect } from './themeOverrides/select';
import { MuiList, MuiListItem, MuiListItemIcon } from './themeOverrides/list';
import { MuiTableContainer } from './themeOverrides/tab';
import { MuiCard } from './themeOverrides/card';
import { MuiSkeleton } from './themeOverrides/skeleton';
import { MuiButton } from './themeOverrides/button';
import { MuiLink } from './themeOverrides/link';
import { MuiCssBaseline } from './themeOverrides/baseline';
import { MuiMenu, MuiAutocomplete } from './themeOverrides/menu';

export const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: palette.orange,
      light: palette.white
    },
    secondary: {
      main: palette.background
    },
    success: {
      main: palette.success
    },
    error: {
      main: palette.error
    },
    warning: {
      main: palette.warning
    },
    info: {
      main: palette.info
    },
    base: {
      main: palette.white
    },
    text: {
      hint: palette.grey,
      icon: palette.grey
    },
    mint: {
      main: palette.focused
    },
    orange: {
      main: palette.orange
    }
  },
  typography: {
    fontFamily: '"Poppins", "sans-serif"',
    h3: {
      fontSize: '32px'
    },
    h4: {
      fontSize: '28px'
    },
    h5: {
      fontSize: '24px'
    },
    h6: {
      fontSize: '18px'
    },
    subtitle2: {
      fontSize: '16px'
    },
    caption: {
      fontSize: '12px'
    },
    body1: {
      whiteSpace: 'break-spaces'
    }
  },
  components: {
    MuiBackdrop,
    MuiInputBase,
    MuiInputLabel,
    MuiOutlinedInput,
    MuiCalendarPicker,
    MuiPickersDay,
    MuiPaper,
    MuiSelect,
    MuiList,
    MuiListItem,
    MuiListItemIcon,
    MuiTableContainer,
    MuiFormControl,
    MuiCard,
    MuiSkeleton,
    MuiButton,
    MuiLink,
    MuiCssBaseline,
    MuiMenu,
    MuiAutocomplete
  }
});

export default function AppThemeProvider({ children }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
