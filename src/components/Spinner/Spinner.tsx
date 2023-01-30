import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

const Spinner = styled((props) => (
  <div {...props}>
    <CircularProgress />
  </div>
))`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 100000;
`;

export default Spinner;
