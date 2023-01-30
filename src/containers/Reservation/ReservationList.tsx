import { GridColDef, GridRenderCellParams, GridToolbarQuickFilter } from '@mui/x-data-grid';
import React, { useEffect, useRef } from 'react';
import NGDataGrid from 'src/components/NGDataGrid/NGDataGrid';
import { SearchContainer, Title } from './NgTableStyled';
import { usePostContext } from './PopupProvider';
import { NGContainer, NGDialogConfirm, NGSection, OutlinedButton } from 'src/components';
import { useDialog } from 'src/hooks';
import { useSnackbar } from 'notistack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useRefereshContext } from './SetRefereshProvider';

export function QuickSearchToolbar() {
  return (
    <SearchContainer>
      <GridToolbarQuickFilter variant="outlined" size="small" />
    </SearchContainer>
  );
}

const ReservationList = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { showPost } = usePostContext();

  const { listRes, GetListAction } = useRefereshContext();

  const rowRef = useRef<GridRenderCellParams | null>(null);

  // Delete Post
  const { open: showDialog, openDialog, closeDialog } = useDialog();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const setRowData = (params: GridRenderCellParams) => {
    rowRef.current = params;
    openDialog();
  };

  useEffect(() => {
    GetListAction();
  }, [GetListAction]);

  const deletePost = () => {
    if (!rowRef?.current?.row?.id) {
      return;
    }
    setIsSubmitting(true);
    fetch('http://localhost:3004/reservations/' + rowRef?.current?.row?.id, {
      method: 'DELETE'
    }).then(() => {
      enqueueSnackbar(`Successfully deleted.`, {
        variant: 'success'
      });
      setIsSubmitting(false);
      closeDialog();
      GetListAction();
    });
  };

  const editPost = (params: GridRenderCellParams) => {
    showPost(params);
  };

  const columns: GridColDef[] = [
    {
      field: 'firstName',
      headerName: 'Name',
      renderCell: (params) => {
        return `${params.row.firstName} ${params.row.lastName}` || '';
      },
      sortable: true,
      width: 160
    },
    {
      field: 'email',
      headerName: 'Email',
      sortable: true,
      width: 200
    },
    {
      field: 'phone',
      headerName: 'Phone',
      sortable: true,
      width: 200
    },
    {
      field: 'city',
      headerName: 'City',
      renderCell: (params) => {
        return params.row?.addressLocation?.city || '';
      },
      width: 200
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      sortable: false,
      align: 'right',
      renderCell: (params) => {
        return (
          <>
            <IconButton onClick={() => editPost(params)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => setRowData(params)}>
              <DeleteIcon />
            </IconButton>
          </>
        );
      }
    }
  ];

  return (
    <>
      <NGSection>
        <NGContainer>
          <Title>Reservation System</Title>
          <div style={{ textAlign: 'right' }}>
            <OutlinedButton onClick={() => showPost(null)}>Add Reservation</OutlinedButton>
          </div>
          {listRes?.length > 0 ? (
            <>
              <div style={{ height: 'calc(100vh - 100px)', width: '100%' }}>
                <NGDataGrid
                  getRowHeight={() => 'auto'}
                  rows={listRes}
                  columns={columns}
                  pageSize={4}
                  rowsPerPageOptions={[4]}
                  disableSelectionOnClick
                  components={{
                    Toolbar: QuickSearchToolbar
                  }}
                />
              </div>
            </>
          ) : (
            <div>No records </div>
          )}
        </NGContainer>
      </NGSection>
      <NGDialogConfirm
        confirmText="Delete"
        dialogTitle="Delete Post"
        dialogSubTitle="Are you sure you want to delete this post ?"
        open={showDialog}
        onClose={closeDialog}
        onConfirm={deletePost}
        loading={isSubmitting}
      />
    </>
  );
};

export default React.memo(ReservationList);
