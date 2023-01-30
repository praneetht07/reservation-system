import { ButtonProps, DialogProps } from '@mui/material';
import React from 'react';

export type DialogConfirmActionsProps = {
  loading?: boolean;
  cancelText?: string;
  confirmText?: string;
  disableCancelButton?: boolean;
  confirmButtonProps?: ButtonProps;
  onConfirm?: (...args: any) => any;
  onCancel?: (...args: any) => void;
};

export type DialogConfirmProps = DialogProps &
  DialogConfirmActionsProps & {
    dialogTitle?: React.ReactNode;
    dialogSubTitle?: React.ReactNode;
  };
