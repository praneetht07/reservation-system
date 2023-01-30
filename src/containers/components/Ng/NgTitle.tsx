import { Typography } from '@mui/material';
import { palette } from 'src/colors';
import styled from 'styled-components';

const NgTitle = styled((props) => <Typography variant="h6" {...props} />)`
  font-weight: 500;
  font-size: 24px;
  color: ${palette.lightBlack};
  margin-bottom: 5px;
`;

export default NgTitle;
