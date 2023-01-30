import * as React from 'react';
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector
} from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { palette } from 'src/colors';

const NGDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color: theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
  WebkitFontSmoothing: 'auto',
  letterSpacing: 'normal',
  '& .MuiDataGrid-columnsContainer': {
    backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d'
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none'
  },
  '& .MuiDataGrid-columnHeaderCheckbox': {
    minWidth: '100px !important'
  },
  '& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer': {
    justifyContent: 'start'
  },
  '& .MuiDataGrid-cellCheckbox': {
    minWidth: '100px !important',
    justifyContent: 'start'
  },
  '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
    outline: 'none !important'
  },
  '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
    borderBottom: `transparent`
  },
  '& .MuiDataGrid-cell': {
    color: '#101828',
    paddingTop: '10px',
    paddingBottom: '10px',
    alignItems: 'flex-start'
  },
  '& .MuiDataGrid-cell:focus': {
    outline: 'none'
  },
  '& .MuiDataGrid-columnHeaderTitle': {
    fontWeight: 500,
    fontSize: '12px',
    color: palette.grayText
  },
  '& .MuiDataGrid-cellContent': {
    fontWeight: 400,
    fontSize: '14px',
    color: '#101828'
  },
  '& .MuiDataGrid-footerContainer': {
    border: 0,
    justifyContent: 'center'
  },
  '& .MuiDataGrid-columnHeaders': {
    border: 0
  },

  '& .MuiPaginationItem-root': {
    borderRadius: 0,
    border: '0px',
    backgroundColor: 'transparent',
    fontWeight: 400,
    fontSize: '14px',
    color: '#9A9EA3'
  },
  '& .MuiPaginationItem-root.Mui-selected': {
    color: palette.orange
  },
  '& .MuiPaginationItem-previousNext svg': {
    fontSize: '27px'
  },
  '& .MuiPaginationItem-root.Mui-selected:hover': {
    backgroundColor: 'transparent'
  }
}));

export default NGDataGrid;

export function NGDataGridPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <>
      <Pagination
        color="primary"
        variant="outlined"
        shape="rounded"
        page={page + 1}
        count={pageCount}
        // @ts-expect-error
        renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
        onChange={(event: React.ChangeEvent<unknown>, value: number) =>
          apiRef.current.setPage(value - 1)
        }
      />
    </>
  );
}
