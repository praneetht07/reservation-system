import { palette } from 'src/colors';
import styled from 'styled-components';
import Button from './Button';

const OutlinedButton = styled((props) => <Button variant="outlined" {...props} />)`
  border: 1px solid ${palette.orange};
  color: ${palette.orange};
  text-transform: inherit;
  font-size: 14px;
  padding: 3px 15px;
  justify-content: space-between;
  font-weight: 500;
  border-radius: 4px;
  :hover {
    background-color: ${palette.orange};
    color: ${palette.white};
    border-color: ${palette.orange};
  }
`;

export default OutlinedButton;
