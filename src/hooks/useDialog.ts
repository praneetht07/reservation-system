import { useCallback, useMemo, useState } from 'react';

export default function useDialog() {
  const [open, setOpen] = useState(false);

  const closeDialog = useCallback(() => setOpen(false), []);

  const openDialog = useCallback(() => setOpen(true), []);

  const values = useMemo(
    () => ({ open, openDialog, closeDialog }),
    [open, openDialog, closeDialog]
  );

  return values;
}
