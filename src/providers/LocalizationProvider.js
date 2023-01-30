import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';

export const DateFormat = 'DD MMM YYYY';
export const DateTimeFormat = 'DD/MM/YYYY HH:mm:ss';

export default function LocalizationProvider({ children }) {
  return (
    <MuiLocalizationProvider
      dateAdapter={AdapterMoment}
      dateLibInstance={moment}
      dateFormats={{
        keyboardDate: DateFormat,
        keyboardDateTime: DateTimeFormat
      }}
    >
      {children}
    </MuiLocalizationProvider>
  );
}
