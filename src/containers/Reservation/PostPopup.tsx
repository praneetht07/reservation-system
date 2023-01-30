import React from 'react';
import { Dialog, DialogContent, IconButton, DialogTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import AddPost from './AddPost';

type ReservationPopupProps = {
  open: boolean;
  onClose: () => void;
  paramsRef: any;
};

const NgDialog = styled(Dialog)`
  .MuiPaper-root {
    max-width: 840px;
    width: 100%;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    border-radius: 0px;
    margin-top: 10px;
  }
  .MuiBackdrop-root {
  }
`;

const NgDialogTitle = styled(DialogTitle)`
  text-align: right;
  margin-bottom: 0px;
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 0px;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #353d46;
`;

const NgDialogContent = styled(DialogContent)`
  padding: 0px 50px;
  a {
    font-weight: bold;
  }
`;
function PostPopup({ open, onClose, paramsRef }: ReservationPopupProps) {
  return (
    <NgDialog open={open} onClose={onClose} scroll="body">
      <NgDialogTitle>
        {!paramsRef?.current && !paramsRef?.current?.row && !paramsRef?.current?.row?.id
          ? 'Add Reservation'
          : 'Update Reservation'}
        <IconButton aria-label="Close" onClick={onClose} size="large">
          <CloseIcon style={{ color: '#353D46' }} />
        </IconButton>
      </NgDialogTitle>
      <NgDialogContent>
        <AddPost paramsRef={paramsRef} />
      </NgDialogContent>
    </NgDialog>
  );
}

export default React.memo(PostPopup);
