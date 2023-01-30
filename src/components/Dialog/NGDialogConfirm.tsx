import NGDialog from './NGDialog';
import DialogTitle from './DialogTitle';
import NGDialogConfirmActions from './NGDialogConfirmActions';
import { DialogConfirmProps } from './types';
import DialogSubtitle from './DialogSubtitle';

export default function NGDialogConfirm({
  children,
  dialogTitle,
  dialogSubTitle,
  onClose,
  loading,
  onCancel,
  onConfirm,
  cancelText,
  confirmText,
  disableCancelButton,
  ...props
}: DialogConfirmProps) {
  return (
    <NGDialog onClose={onClose} {...props}>
      {!!dialogTitle && <DialogTitle>{dialogTitle}</DialogTitle>}
      {!!dialogSubTitle && <DialogSubtitle>{dialogSubTitle}</DialogSubtitle>}
      {children}
      <NGDialogConfirmActions
        loading={loading}
        onCancel={onCancel || onClose}
        onConfirm={onConfirm}
        cancelText={cancelText}
        confirmText={confirmText}
        disableCancelButton={disableCancelButton}
      />
    </NGDialog>
  );
}
