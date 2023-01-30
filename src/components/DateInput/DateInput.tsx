import { useEffect, useRef, useState } from 'react';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers';
import { IconButton, InputAdornment, TextFieldProps } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import styled from 'styled-components';
import moment from 'moment';
import { TextInput } from '../TextInput';

const StyledTextInput = styled(TextInput)`
  .MuiInputAdornment-outlined {
    margin-right: -14px;
  }
  .MuiInputAdornment-standard {
    margin-right: -5px;
  }
`;

const formatterRegex = /[^. ,[a-zA-Z0-9_]*$]+/gi;

const rifmFormatter = (val: string) => val.replace(formatterRegex, '');

type DateInputProps = Omit<DatePickerProps<any, any>, 'renderInput'> & {
  required?: boolean;
  error?: boolean;
  name?: string;
  style?: any;
  defaultToday?: boolean;
  maxDateMessage?: string;
  invalidDateMessage?: string;
  renderInput?: (props: TextFieldProps) => React.ReactElement;
};

export default function DateInput({
  onChange,
  onOpen,
  onClose,
  minDate,
  maxDate,
  value,
  disableMaskedInput = true,
  closeOnSelect = true,
  error = false,
  name,
  style = {},
  defaultToday,
  disabled = false,
  required,
  ...props
}: DateInputProps) {
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const inititated = useRef(false);

  useEffect(() => {
    if (inititated.current) {
      return;
    }
    inititated.current = true;
    if (defaultToday && !value) {
      onChange?.(moment());
    }
  }, [defaultToday, onChange, value]);

  const openPicker = () => setOpen(true);

  const handleOpen = () => {
    setOpen(true);
    onOpen?.();
  };

  const handleClose = () => {
    setOpen(false);
    onClose?.();
  };

  const handleError = (error: any) => {
    setErrorMessage('');
  };

  return (
    <DatePicker
      open={open}
      disableMaskedInput={disableMaskedInput}
      closeOnSelect={closeOnSelect}
      disabled={disabled}
      rifmFormatter={rifmFormatter}
      minDate={minDate}
      maxDate={maxDate}
      value={value || null}
      onChange={onChange}
      onOpen={handleOpen}
      onClose={handleClose}
      onError={handleError}
      PopperProps={{
        anchorEl: buttonRef?.current,
        placement: 'bottom-end'
      }}
      renderInput={(params) => (
        <StyledTextInput
          {...params}
          name={name}
          error={error || !!errorMessage}
          helperText={errorMessage}
          style={style}
          disabled={disabled}
          required={required}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton ref={buttonRef} disabled={disabled} onClick={openPicker}>
                  <EventIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      )}
      {...props}
    />
  );
}
