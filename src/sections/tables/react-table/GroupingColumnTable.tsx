import { useMemo } from 'react';

// material-ui
import { Box, Chip, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

// third-party
import { useTable, useGroupBy, useExpanded, Column, HeaderGroup, Cell, ColumnInstance, Row } from 'react-table';

// project-imports
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import { CSVExport } from 'components/third-party/ReactTable';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import { roundedMedian, useControlledState } from 'utils/react-table';

// assets
import { ArrowDown2, ArrowRight2, LayoutMaximize, Maximize1 } from 'iconsax-react';

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data }: { columns: Column[]; data: [] }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      initialState: { groupBy: ['status'] }
    },
    useGroupBy,
    useExpanded,
    (hooks) => {
      hooks.useControlledState.push(useControlledState);
      hooks.visibleColumns.push((columns: any, { instance }) => {
        if (!instance.state.groupBy.length) {
          return columns;
        }
        return [
          {
            id: 'expander',
            Header: ({ allColumns, state: { groupBy } }) =>
              groupBy.map((columnId: string) => {
                const column: ColumnInstance<{}> = allColumns.find((d) => d.id === columnId)!;
                const groupIcon = column.isGrouped ? <Maximize1 size={18} /> : <LayoutMaximize size={18} />;

                return (
                  <Stack
                    direction="row"
                    spacing={1.25}
                    alignItems="center"
                    {...column.getHeaderProps()}
                    sx={{ display: 'inline-flex', '&:not(:last-of-type)': { mr: 1.5 } }}
                  >
                    {column.canGroupBy ? (
                      <Box
                        sx={{ color: column.isGrouped ? 'error.main' : 'primary.main', fontSize: '1rem' }}
                        {...column.getGroupByToggleProps()}
                      >
                        {groupIcon}
                      </Box>
                    ) : null}
                    <Typography variant="subtitle1">{column.render('Header')}</Typography>
                  </Stack>
                );
              }),
            Cell: ({ row }: { row: Row<{}> }) => {
              if (row.canExpand) {
                const groupedCell: Cell = row.allCells.find((d: Cell) => d.isGrouped)!;
                const collapseIcon = row.isExpanded ? <ArrowDown2 /> : <ArrowRight2 />;

                return (
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Box
                      sx={{ pl: row.depth * 2, pr: 1.25, fontSize: '0.75rem', color: 'text.secondary' }}
                      {...row.getToggleRowExpandedProps()}
                    >
                      {collapseIcon}
                    </Box>
                    {groupedCell.render('Cell')} ({row.subRows.length})
                  </Stack>
                );
              }
              return null;
            }
          },
          ...columns
        ];
      });
    }
  );

  const firstPageRows = rows.slice(0, 15);
  let groupedData = rows.map((d: Row) => d.original);
  Object.keys(groupedData).forEach((key: string) => groupedData[Number(key)] === undefined && delete groupedData[Number(key)]);

  return (
    <MainCard
      content={false}
      title="Grouping With Single Column"
      secondary={
        <Stack direction="row" spacing={2}>
          <Legend /> <CSVExport data={groupedData} filename={'grouping-single-column-table.csv'} />
        </Stack>
      }
    >
      <ScrollX>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup: HeaderGroup<{}>, i: number) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: HeaderGroup<{}>, index: number) => {
                  const groupIcon = column.isGrouped ? <Maximize1 /> : <LayoutMaximize />;
                  return (
                    <TableCell {...column.getHeaderProps([{ className: column.className }])}>
                      <Stack direction="row" spacing={1.15} alignItems="center" sx={{ display: 'inline-flex' }}>
                        {column.canGroupBy ? (
                          <Box
                            sx={{ color: column.isGrouped ? 'error.main' : 'primary.main', fontSize: '1rem' }}
                            {...column.getGroupByToggleProps()}
                          >
                            {groupIcon}
                          </Box>
                        ) : null}
                        <Box>{column.render('Header')}</Box>
                      </Stack>
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {firstPageRows.map((row: Row) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell: Cell<{}, any>) => {
                    let bgcolor = 'background.paper';
                    if (cell.isAggregated) bgcolor = 'warning.lighter';
                    if (cell.isGrouped) bgcolor = 'success.lighter';
                    if (cell.isPlaceholder) bgcolor = 'error.lighter';

                    return (
                      <TableCell {...cell.getCellProps([{ className: cell.column.className }])} sx={{ bgcolor }}>
                        {cell.isAggregated ? cell.render('Aggregated') : cell.isPlaceholder ? null : cell.render('Cell')}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </ScrollX>
    </MainCard>
  );
}

// ==============================|| LEGEND ||============================== //

function Legend() {
  return (
    <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end">
      <Chip color="warning" variant="light" label="Aggregated" />
    </Stack>
  );
}

// ==============================|| REACT TABLE - GROUPING COLUMN ||============================== //

function GroupingColumnTable({ data }: { data: [] }) {
  const columns = useMemo(
    () =>
      [
        {
          Header: 'First Name',
          accessor: 'firstName',
          aggregate: 'count',
          Aggregated: ({ value }: { value: number }) => `${value} Person`,
          disableGroupBy: true
        },
        {
          Header: 'Last Name',
          accessor: 'lastName',
          disableGroupBy: true
        },
        {
          Header: 'Email',
          accessor: 'email',
          disableGroupBy: true
        },
        {
          Header: 'Age',
          accessor: 'age',
          className: 'cell-right',
          aggregate: 'average',
          Aggregated: ({ value }: { value: number }) => `${value} (avg)`
        },
        {
          Header: 'Visits',
          accessor: 'visits',
          className: 'cell-right',
          aggregate: 'sum',
          Aggregated: ({ value }: { value: number }) => `${value} (total)`,
          disableGroupBy: true
        },
        {
          Header: 'Status',
          accessor: 'status',
          Cell: ({ value }: { value: string }) => {
            switch (value) {
              case 'Complicated':
                return <Chip color="error" label="Complicated" size="small" variant="light" />;
              case 'Relationship':
                return <Chip color="success" label="Relationship" size="small" variant="light" />;
              case 'Single':
              default:
                return <Chip color="info" label="Single" size="small" variant="light" />;
            }
          }
        },
        {
          Header: 'Profile Progress',
          accessor: 'progress',
          aggregate: roundedMedian,
          Aggregated: ({ value }: { value: number }) => `${value} (med)`,
          disableGroupBy: true,
          Cell: ({ value }: { value: number }) => <LinearWithLabel value={value} sx={{ minWidth: 75 }} />
        }
      ] as Column[],
    []
  );

  return <ReactTable columns={columns} data={data} />;
}

export default GroupingColumnTable;
