import { ChangeEvent, useEffect, useState } from 'react';
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Switch,
  TextField
} from '@mui/material';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { TextInputField, AutoSelectField } from 'src/components';
import { ReservationFormType } from 'src/types';
import styled from 'styled-components';
import { NgSubmitButton } from '../components';
import moment from 'moment';
import { DateInputField } from 'src/components/DateInput';

const FormSection = styled.div``;

const SubmitButton = styled((props) => <NgSubmitButton {...props} />)`
  background: #f58255;
  border-radius: 8px;
  min-width: 140px !important;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  text-transform: inherit;
  box-shadow: none !important;
  height: 48px;
  &.disableButton {
    background: #fef3ee;
    color: #f9b499;
  }
  :hover {
    background: #f58255 !important;
    color: #fff;
  }
`;

export type FormProps = {
  onSubmit: SubmitHandler<ReservationFormType>;
  paramsRef: any;
};

export default function AddPostForm({ onSubmit, paramsRef }: FormProps) {
  const Dorpdown = [
    {
      label: 'Business Suite',
      value: 'Business Suite'
    },
    {
      label: 'Test2',
      value: 'test2'
    }
  ];
  const ExtrasDorpdown = [
    {
      label: 'Breakfast',
      value: 'Breakfast'
    },
    {
      label: 'Tvs',
      value: 'Tvs'
    },
    {
      label: 'WiFi',
      value: 'WiFi'
    }
  ];

  const {
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isSubmitting, isValid }
  } = useFormContext<ReservationFormType>();

  const [confirmCheck, setConfirmCheck] = useState<boolean>(false);
  const [extrasVal, setExtrasVal] = useState<{ label: string; value: string }[]>();
  const [tagsVal, setTagsVal] = useState<{ label: string; value: string }[]>();

  useEffect(() => {
    if (!paramsRef?.current && !paramsRef?.current?.row && !paramsRef?.current?.row?.id) {
      return;
    }
    setTagsVal(paramsRef?.current?.row?.tags);
    setExtrasVal(paramsRef?.current?.row?.extras);

    setValue('id', paramsRef?.current?.row?.id);

    setValue('arrivalDate', paramsRef?.current?.row?.arrivalDate);
    setValue('departureDate', paramsRef?.current?.row?.departureDate);
    setValue('roomSize', paramsRef?.current?.row?.roomSize);
    setValue('roomQuantity', paramsRef?.current?.row?.roomQuantity);
    setValue('firstName', paramsRef?.current?.row?.firstName);
    setValue('lastName', paramsRef?.current?.row?.lastName);

    setValue('email', paramsRef?.current?.row?.email);
    setValue('phone', paramsRef?.current?.row?.phone);
    setValue('streetName', paramsRef?.current?.row?.streetName);
    setValue('streetNumber', paramsRef?.current?.row?.streetNumber);

    setValue('zipCode', paramsRef?.current?.row?.zipCode);
    setValue('state', paramsRef?.current?.row?.state);
    setValue('city', paramsRef?.current?.row?.city);

    setValue('extras', paramsRef?.current?.row?.extras);
    setValue('tags', paramsRef?.current?.row?.tags);
    setValue('note', paramsRef?.current?.row?.note);

    setValue('reminder', !!paramsRef?.current?.row?.reminder);
    setValue('newsletter', !!paramsRef?.current?.row?.newsletter);
    setValue('confirm', !!paramsRef?.current?.row?.confirm);
    setConfirmCheck(!!paramsRef?.current?.row?.confirm);

    setPayment(paramsRef?.current?.row?.payment || 'credit');
    setValue('payment', paramsRef?.current?.row?.payment || 'credit');
  }, [paramsRef, setValue]);

  const handleReminderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('reminder', event.target.checked);
  };
  const handleNewsletterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('newsletter', event.target.checked);
  };

  const handleConfirmChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('confirm', event.target.checked);
    setConfirmCheck(event.target.checked);
  };
  const [payment, setPayment] = useState('credit');

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayment((event.target as HTMLInputElement).value);
    setValue('payment', (event.target as HTMLInputElement).value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormSection>
        <Grid container spacing={4} style={{ marginTop: '0px' }}>
          <Grid item xs={12} md={6}>
            <DateInputField
              name="arrivalDate"
              label="Date of arrival"
              error={!!errors.arrivalDate}
              defaultValue={moment()}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DateInputField
              name="departureDate"
              label="Date of departure"
              error={!!errors.departureDate}
              defaultValue={moment()}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <AutoSelectField
              rules={{ required: { value: true } }}
              label="Room size"
              name="roomSize"
              error={!!errors.roomSize}
              options={Dorpdown}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInputField
              rules={{ required: { value: true } }}
              label="Room Quantity (Maximum 5)"
              name="roomQuantity"
              error={!!errors.roomQuantity}
              size="large"
              type="number"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextInputField
              name="firstName"
              label="First name"
              size="large"
              rules={{ required: { value: true } }}
              error={!!errors.firstName}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextInputField
              name="lastName"
              label="Last name"
              size="large"
              rules={{ required: { value: true } }}
              error={!!errors.lastName}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextInputField
              name="email"
              label="Email"
              size="large"
              rules={{ required: { value: true } }}
              error={!!errors.email}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextInputField
              name="phone"
              label="Phone number (Add your county code first)"
              size="large"
              rules={{ required: { value: true } }}
              error={!!errors.phone}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInputField
              name="streetName"
              label="Street Name"
              size="large"
              rules={{ required: { value: true } }}
              error={!!errors.streetName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInputField
              name="streetNumber"
              label="Street Number"
              size="large"
              rules={{ required: { value: true } }}
              error={!!errors.streetNumber}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextInputField
              name="zipCode"
              label="Zip"
              size="large"
              rules={{ required: { value: true } }}
              error={!!errors.zipCode}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextInputField
              name="state"
              label="State"
              size="large"
              rules={{ required: { value: true } }}
              error={!!errors.state}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextInputField
              name="city"
              label="City"
              size="large"
              rules={{ required: { value: true } }}
              error={!!errors.city}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Payment</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={payment}
                onChange={handlePaymentChange}
              >
                <FormControlLabel value="credit" control={<Radio />} label="Credit card" />
                <FormControlLabel value="paypal" control={<Radio />} label="Paypal" />
                <FormControlLabel value="cash" control={<Radio />} label="Cash" />
                <FormControlLabel value="bitcoin" control={<Radio />} label="Bitcoin" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextInputField name="note" label="Personal note" size="large" />
          </Grid>
          {!paramsRef?.current && !paramsRef?.current?.row && !paramsRef?.current?.row?.id && (
            <>
              <Grid item xs={12} md={12}>
                <Autocomplete
                  onChange={(e, val) => {
                    setValue('extras', val);
                    setExtrasVal(val);
                  }}
                  defaultValue={extrasVal}
                  multiple={true}
                  id="combo-box-demo"
                  options={ExtrasDorpdown}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => <TextField {...params} name="extras" label="Extras" />}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Autocomplete
                  onChange={(e, val) => {
                    setValue('tags', val);
                    setTagsVal(val);
                  }}
                  defaultValue={tagsVal}
                  multiple={true}
                  id="combo-box-tags"
                  options={ExtrasDorpdown}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => <TextField {...params} name="tags" label="Tags" />}
                />
              </Grid>
            </>
          )}
          <Grid item xs={12} md={12}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={getValues('reminder')}
                    onChange={handleReminderChange}
                    name="reminder"
                  />
                }
                label="Send me a reminder"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={getValues('newsletter')}
                    onChange={handleNewsletterChange}
                    name="newsletter"
                  />
                }
                label="Subscribe to newsletter"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} md={12}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={confirmCheck} onChange={handleConfirmChange} name="confirm" />
                }
                label="I confirm the information given above"
              />
            </FormGroup>
          </Grid>
        </Grid>
      </FormSection>
      <FormSection style={{ marginTop: '30px' }}>
        <Grid container spacing={4} style={{ marginTop: '0px' }}>
          <Grid item xs={12} textAlign="center">
            <SubmitButton
              className={isValid ? '' : 'disableButton'}
              fullWidth={false}
              type="submit"
              disabled={isSubmitting}
              style={{ minWidth: '240px', marginBottom: '20px' }}
            >
              {!paramsRef?.current && !paramsRef?.current?.row && !paramsRef?.current?.row?.id
                ? 'Submit'
                : 'Update'}
            </SubmitButton>
          </Grid>
        </Grid>
      </FormSection>
    </form>
  );
}
