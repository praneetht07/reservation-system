import { Typography } from '@mui/material';
import styled from 'styled-components';

export const Title = styled((props) => <Typography variant="h4" {...props} />)`
  font-weight: 400;
  font-size: 21px;
  color: #101828;
  margin-bottom: 6px;
`;

export const SearchContainer = styled.div`
  margin-bottom: 20px;
  margin-top: 36px;
  .MuiTextField-root {
    max-width: 450px;
    width: 100%;
  }
`;

export const CustomTableTitle = styled((props) => <Typography variant="body2" {...props} />)`
  font-weight: 500;
  font-size: 12px;
  color: #9a9ea3;
  svg {
    font-size: 17px;
    color: #9a9ea3;
    margin-left: 5px;
    position: relative;
    top: 5px;
  }
`;
