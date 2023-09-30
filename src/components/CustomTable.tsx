import { useMemo } from 'react';

// material-ui
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Stack, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

// third-party
import { useFilters, useRowSelect, useTable, usePagination, Column, Row, HeaderGroup, Cell } from 'react-table';

// project-imports
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import { IndeterminateCheckbox } from 'components/third-party/ReactTable';
import { CSVExport, TablePagination, TableRowSelection } from 'components/third-party/ReactTable';

import { renderFilterTypes } from 'utils/react-table';

function CustomTable({ columns, data, title }: { columns: Column[]; data: []; title?: string }) {
  const theme = useTheme();
  const filterTypes = useMemo(() => renderFilterTypes, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    gotoPage,
    setPageSize,
    state: { selectedRowIds, pageIndex, pageSize },
    selectedFlatRows
  } = useTable(
    {
      columns,
      data,
      filterTypes,
      initialState: { pageIndex: 0, pageSize: 10 }
    },
    useFilters,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.allColumns.push((columns: Column[]) => [
        {
          id: 'row-selection-chk',
          accessor: 'Selection',
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <IndeterminateCheckbox indeterminate {...getToggleAllPageRowsSelectedProps()} />
          ),
          Cell: ({ row }: any) => <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
        },
        ...columns
      ]);
    }
  );

  return (
    <>
      <MainCard
        title={title ?? ''}
        content={false}
        secondary={<CSVExport data={selectedFlatRows.map((d: Row) => d.original)} filename={'added_links.csv'} />}
      >
        <ScrollX>
          <TableRowSelection selected={Object.keys(selectedRowIds).length} />
          <Stack spacing={3}>
            <Table {...getTableProps()}>
              <TableHead>
                {headerGroups.map((headerGroup) => (
                  <TableRow {...headerGroup.getHeaderGroupProps()} sx={{ '& > th:first-of-type': { width: '58px' } }}>
                    {headerGroup.headers.map((column: HeaderGroup) => (
                      <TableCell {...column.getHeaderProps([{ className: column.className }])}>{column.render('Header')}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableHead>
              <TableBody {...getTableBodyProps()}>
                {page.map((row: Row, i: number) => {
                  prepareRow(row);
                  return (
                    <TableRow
                      {...row.getRowProps()}
                      // onClick={() => {
                      //   row.toggleRowSelected();
                      // }}
                      sx={{ cursor: 'pointer', bgcolor: row.isSelected ? alpha(theme.palette.primary.lighter, 0.35) : 'inherit' }}
                    >
                      {row.cells.map((cell: Cell) => (
                        <TableCell {...cell.getCellProps([{ className: cell.column.className }])}>{cell.render('Cell')}</TableCell>
                      ))}
                    </TableRow>
                  );
                })}
                <TableRow>
                  <TableCell sx={{ p: 2, pb: 0 }} colSpan={8}>
                    <TablePagination gotoPage={gotoPage} rows={rows} setPageSize={setPageSize} pageSize={pageSize} pageIndex={pageIndex} />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Box></Box>
          </Stack>
        </ScrollX>
      </MainCard>
    </>
  );
}

export default CustomTable;
