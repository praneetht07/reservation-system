import { Controller, ControllerProps, useFormContext } from 'react-hook-form';

function getLabelText(label: string, rules: any) {
  if (rules?.required && label) {
    return `${label} *`;
  }
  return label;
}

export const rulesRequired = {
  required: true
};

type BaseFieldProps = ControllerProps & {
  [x: string]: string;
};

// Base controller to use with react-form-hook lib
export default function BaseField({
  name,
  render, // Custom render
  defaultValue = '',
  rules,
  shouldUnregister,
  label,
  helperText,
  ...props
}: BaseFieldProps | any) {
  // Use default react form context hook
  // Please wrap component with FormProvider
  const {
    control,
    formState: { errors }
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { value, onChange } }) =>
        render({
          ...props,
          name,
          value,
          onChange,
          label: getLabelText(label, rules),
          helperText: errors?.[name]?.message || helperText
        })
      }
    />
  );
}
