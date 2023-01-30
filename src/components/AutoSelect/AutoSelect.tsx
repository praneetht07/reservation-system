import { Autocomplete, AutocompleteProps, Popper } from '@mui/material';
import styled from 'styled-components';
import { palette } from 'src/colors';
import { TextInput } from '../TextInput';
import React from 'react';

export const AutoSelectPopper = styled(Popper)`
  border: 2px solid ${palette.focused};
  &[x-placement='bottom'] {
    margin-top: 1px;
  }
  &[x-placement='top'] {
    margin-bottom: 2px;
  }
  .MuiAutocomplete-listbox {
    padding: 0;
  }
  .MuiAutocomplete-option {
    padding: 5px 15px;
    display: flex;
  }
`;

const StyledSelect = styled(Autocomplete)`
  width: 100%;
  .MuiAutocomplete-clearIndicatorDirty {
    visibility: ${({ value, options }) => {
      const hasValue = options?.includes(value);
      return hasValue ? 'visible' : 'hidden';
    }};
  }
`;

const getLabel = (option: any) => option?.label || '';

type AutoSelectProps = Omit<AutocompleteProps<any, any, any, any, any>, 'renderInput'> & {
  helperText?: string;
  error?: boolean;
  required?: boolean;
  label?: string;
  variant?: string;
  multiline?: boolean;
  TextInputComponent?: React.ComponentType<any>;
};

export default function AutoSelect({
  autoComplete = true,
  autoHighlight = true,
  disableListWrap = true,
  disableClearable = true,
  getOptionLabel = getLabel,
  value = null,
  options = [],
  helperText = '',
  error,
  required,
  label,
  variant,
  multiline,
  PopperComponent = AutoSelectPopper,
  TextInputComponent = TextInput,
  ...props
}: AutoSelectProps) {
  return (
    <StyledSelect
      PopperComponent={({ style = {}, ...params }) => {
        if (!options.length) {
          style.visibility = 'hidden';
        }
        return <PopperComponent style={style} {...params} />;
      }}
      autoComplete={autoComplete}
      autoHighlight={autoHighlight}
      disableListWrap={disableListWrap}
      disableClearable={disableClearable}
      options={options}
      value={value}
      getOptionLabel={getOptionLabel}
      renderInput={(params) => (
        <TextInputComponent
          label={label}
          error={error}
          required={required}
          {...params}
          helperText={helperText}
          size="large"
        />
      )}
      {...props}
    />
  );
}
