import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Spinner } from 'src/components';
import { useSnackbar } from 'notistack';
import AddPostForm from './AddPostForm';
import { usePostContext } from './PopupProvider';
import { ReservationFormType } from 'src/types';
import { useRefereshContext } from './SetRefereshProvider';

function AddPost({ paramsRef }: any) {
  const { enqueueSnackbar } = useSnackbar();
  const { hidePost } = usePostContext();
  const { GetListAction } = useRefereshContext();

  const methods = useForm();
  const {
    formState: { isSubmitting }
  } = methods;

  const onSubmit = async (payload: ReservationFormType) => {
    payload.addressLocation = {
      zipCode: payload.zipCode,
      state: payload.state,
      city: payload.city
    };
    payload.addressStreet = {
      streetName: payload.streetName,
      streetNumber: payload.streetNumber
    };
    payload.room = {
      roomQuantity: payload.roomQuantity,
      roomSize: payload.roomSize
    };
    payload.stay = {
      arrivalDate: payload.arrivalDate,
      departureDate: payload.departureDate
    };
    if (payload?.id) {
      fetch('http://localhost:3004/reservations/' + payload?.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).then(() => {
        enqueueSnackbar(`Updated successfully`, {
          variant: 'success'
        });
        GetListAction();
        hidePost();
      });
    } else {
      fetch('http://localhost:3004/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).then(() => {
        enqueueSnackbar(`Added successfully`, {
          variant: 'success'
        });
        GetListAction();
        hidePost();
      });
    }
  };

  return (
    <>
      {isSubmitting && <Spinner />}
      <div style={{ maxWidth: '1000px', paddingTop: '0px' }}>
        <FormProvider {...methods}>
          <AddPostForm onSubmit={onSubmit} paramsRef={paramsRef} />
        </FormProvider>
      </div>
    </>
  );
}

export default React.memo(AddPost);
