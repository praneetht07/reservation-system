import styled from 'styled-components';
import { Dialog as MuiDialog } from '@mui/material';

const NGStyledDialog = styled(MuiDialog)`
  .MuiBackdrop-root {

  }
  .MuiDialog-paper {
    max-width: 490px;
    width: 100%;
    margin: 0;
    padding: 30px 30px;
    border-radius: 0px;
    background: #fff;
    box-shadow: 0px 1px 4px #dddddda6;
  }
  .MuiDialogTitle-root {
    padding: 0 0 18px;
    font-size: 24px;
  }
  .MuiDialogContent-root {
    padding: 0;
    overflow: visible;
  }
  .MuiDialogActions-root {
    padding: 40px 0 0 0;
    justify-content: flex-start;
  }
`;

export default function NGDialog({ children, onClose, ...props }) {
  return (
    <NGStyledDialog scroll="body" onClose={onClose} {...props}>
      {children}
    </NGStyledDialog>
  );
}
