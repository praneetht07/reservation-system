import BaseField from '../BaseField';
import DateInput from './DateInput';

export default function DateInputField(props: any) {
  return <BaseField {...props} render={DateInput} />;
}
