import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  CircularProgress
} from '@mui/material';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import styled from 'styled-components';

const Spinner = styled(CircularProgress)`
  margin-right: 8px;
  color: #fff;
`;

export type ButtonProps = MuiButtonProps & {
  loading?: boolean;
  showArrowEndIcon?: boolean;
  component?: string;
};

const Button = styled(
  ({
    children,
    loading,
    showArrowEndIcon,
    variant = 'contained',
    size = 'large',
    color = 'primary',
    startIcon,
    endIcon,
    ...props
  }: ButtonProps) => (
    <MuiButton
      size={size}
      variant={variant}
      color={color}
      disabled={loading}
      startIcon={!loading && startIcon}
      endIcon={
        endIcon || (showArrowEndIcon && <ArrowForwardOutlinedIcon style={{ fontSize: '14px' }} />)
      }
      {...props}
    >
      {loading && <Spinner size={14} />}
      {children}
    </MuiButton>
  )
)`
  border-radius: 0;
  font-weight: 500;
  border-radius: 4px;
`;

export default Button;
