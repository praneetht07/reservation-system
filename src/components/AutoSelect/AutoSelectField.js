import React from 'react';
import BaseField from '../BaseField';
import AutoSelect from './AutoSelect';

const getValue = (option) => option?.value;

export default function AutoSelectField({ getOptionValue = getValue, ...props }) {
  return (
    <BaseField
      {...props}
      render={({ onChange, options, value, ...params }) => (
        <AutoSelect
          {...params}
          onChange={(e, option) => onChange(getOptionValue(option))}
          options={options}
          value={options.find((option) => getOptionValue(option) === value)}
        />
      )}
    />
  );
}
