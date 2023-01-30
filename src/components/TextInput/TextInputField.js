import React from 'react';
import BaseField from '../BaseField';
import TextInput from './TextInput';

export default function TextInputField({ defaultValue = '', ...props }) {
  return (
    <BaseField
      defaultValue={defaultValue}
      {...props}
      render={({ onChange, ...params }) => (
        <TextInput {...params} onChange={(e) => onChange(e.target.value)} />
      )}
    />
  );
}
