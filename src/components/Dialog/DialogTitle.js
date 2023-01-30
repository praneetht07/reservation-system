import styled from 'styled-components';
import { Typography } from '@mui/material';

const DialogTitle = styled((props) => <Typography variant="h5" {...props} />)`
  padding: 0 0 10px;
  font-weight: 500;
  font-size: 20px;
  color: #353d46;
`;

export default DialogTitle;
