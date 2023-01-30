import { Typography } from '@mui/material';
import { palette } from 'src/colors';
import styled from 'styled-components';

const NgSubTitle = styled((props) => <Typography variant="body1" {...props} />)`
  font-weight: 400;
  font-size: 14px;
  color: ${palette.grayText};
  margin-bottom: 20px;
`;

export default NgSubTitle;
