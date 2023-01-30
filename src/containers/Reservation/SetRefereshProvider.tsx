import { useState } from 'react';
import { createContext, useCallback, useContext, useMemo } from 'react';
import { ReservationFormType } from 'src/types';

type RefereshContextValue = {
  listRes: ReservationFormType[];
  GetListAction: () => void;
};

const RefereshContext = createContext<RefereshContextValue>({
  listRes: [],
  GetListAction: () => {}
});

export function useRefereshContext() {
  return useContext(RefereshContext);
}

export default function SetRefereshProvider({ children }: any) {
  const [listRes, setListRes] = useState<ReservationFormType[]>([]);

  const GetListAction = useCallback(() => {
    fetch('http://localhost:3004/reservations')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setListRes(data);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted.');
        }
      });
  }, []);

  const value = useMemo(() => ({ listRes, GetListAction }), [listRes, GetListAction]);

  return <RefereshContext.Provider value={value}>{children}</RefereshContext.Provider>;
}
