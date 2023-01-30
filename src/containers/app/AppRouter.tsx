import React from 'react';
import { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PostPopupProvider from '../Reservation/PopupProvider';
import SetRefereshProvider from '../Reservation/SetRefereshProvider';
const ReservationList = React.lazy(() => import('../Reservation/ReservationList'));

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route
          path="/reservations"
          render={() => {
            return (
              <SetRefereshProvider>
                <PostPopupProvider>
                  <ReservationList />
                </PostPopupProvider>
              </SetRefereshProvider>
            );
          }}
        />

        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/reservations" />;
          }}
        />
        {/* <Route component={PageNotFound} /> */}
      </Switch>
    </Suspense>
  );
}
