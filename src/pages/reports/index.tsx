import { Grid, Typography } from '@mui/material';

// assets
import { Edit, Trash, Eye } from 'iconsax-react';

import { useMemo } from 'react';

import makeData from 'data/react-table';

import CustomTable from 'components/CustomTable';
import { Link } from 'react-router-dom';

const Reports = () => {
  const data = useMemo(() => makeData(2000), []);
  const columns = useMemo(
    () => [
      {
        Header: 'Links',
        accessor: 'links'
      },
      {
        Header: 'Date',
        accessor: 'time'
      },
      {
        Header: 'Actions',
        accessor: 'action',
        Cell: ({ value }: { value: string }) => {
          return (
            <>
              <Grid container spacing={2}>
                <Grid item>
                  <Link to={'details'}>
                    <Eye size="20" color="#6499E9" />
                  </Link>
                </Grid>
                <Grid item>
                  <Edit size="20" />
                </Grid>
                <Grid item>
                  <Trash size="20" color="#FF8A65" />
                </Grid>
              </Grid>
            </>
          );
        }
      }
    ],
    []
  );

  return (
    <Grid container spacing={3}>
      <Grid item lg={12}>
        <Typography variant="h3" mb={2} mt={3} pl={1}>
          Reports
        </Typography>
        <CustomTable columns={columns} data={data} title="Reports" />
      </Grid>
    </Grid>
  );
};

export default Reports;
