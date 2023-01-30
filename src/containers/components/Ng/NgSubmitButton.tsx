import { palette } from 'src/colors';
import { Button } from 'src/components';
import styled from 'styled-components';

const NgSubmitButton = styled((props) => <Button fullWidth {...props} />)`
  height: 56px;
  font-size: 21px;
  border-radius: 8px;
  background-color: ${palette.orange};
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
  text-transform: inherit;
`;

export default NgSubmitButton;
