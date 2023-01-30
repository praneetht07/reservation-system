import { IconButton } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { SnackbarProvider, useSnackbar } from 'notistack';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const useStyles = makeStyles(() => ({
  root: {
    '& .SnackbarContent-root': {
      display: 'flex',
      borderRadius: '8px',
      '& > .SnackbarItem-message': {
        maxWidth: 'calc(100% - 40px)',
        lineHeight: '1.3',
        '& > svg': {
          fontSize: '24px'
        }
      },
      '& > .SnackbarItem-action': {
        paddingLeft: '0'
      }
    }
  }
}));

function DismissAction(key) {
  const { closeSnackbar } = useSnackbar();
  return (
    <IconButton onClick={() => closeSnackbar(key)} color="inherit" size="large">
      <CancelOutlinedIcon />
    </IconButton>
  );
}

function InnerSnackbarProvider({ children }) {
  return children;
}

const anchorOrigin = {
  vertical: 'top',
  horizontal: 'left'
};

export default function StyledSnackbarProvider({ children }) {
  const classes = useStyles();
  return (
    <SnackbarProvider
      maxSnack={1}
      autoHideDuration={5000}
      anchorOrigin={anchorOrigin}
      classes={classes}
      action={DismissAction}
    >
      <InnerSnackbarProvider>{children}</InnerSnackbarProvider>
    </SnackbarProvider>
  );
}
