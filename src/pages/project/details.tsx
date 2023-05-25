// material - ui;
import { useTheme } from '@mui/material/styles';
import { Button, Grid, Typography } from '@mui/material';
import { Chip } from '@mui/material';

// project-imports
import ReportCard from 'components/cards/statistics/ReportCard';

// assets
import { DocumentDownload, Youtube, Facebook, Instagram, GlobalSearch, GoogleDrive, Send2, Diagram, Message } from 'iconsax-react';

import { useMemo } from 'react';

// material-ui
// import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';

import makeData from 'data/react-table';

import CustomTable from 'components/CustomTable';

const ProjectDetails = () => {
  const theme = useTheme();

  const data = useMemo(() => makeData(2000), []);
  const columns = useMemo(
    () => [
      {
        Header: 'Platform',
        accessor: 'lastName'
      },
      {
        Header: 'Links',
        accessor: 'firstName'
      },
      // {
      //   Header: 'Email',
      //   accessor: 'email'
      // },
      // {
      //   Header: 'Age',
      //   accessor: 'age',
      //   className: 'cell-right'
      // },
      // {
      //   Header: 'Visits',
      //   accessor: 'visits',
      //   className: 'cell-right'
      // },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }: { value: string }) => {
          switch (value) {
            case 'Complicated':
              return <Chip color="error" label="Processing" size="small" variant="light" />;
            case 'Relationship':
              return <Chip color="success" label="Removed" size="small" variant="light" />;
            case 'Single':
            default:
              return <Chip color="info" label="Unavailable" size="small" variant="light" />;
          }
        }
      },
      {
        Header: 'Date',
        accessor: 'date'
      },
      {
        Header: 'Actions',
        accessor: 'action'
      }
    ],
    []
  );

  return (
    <Grid container spacing={3}>
      <Grid item lg={12} textAlign={'right'}>
        <Button variant="contained">Add Links</Button>
      </Grid>
      <Grid item xs={12} md={4} lg={3} sm={6}>
        <ReportCard primary="$30200" secondary="Total Links" color={theme.palette.secondary.main} iconPrimary={Diagram} />
      </Grid>
      <Grid item xs={12} md={4} lg={3} sm={6}>
        <ReportCard primary="500" secondary="Telegram" color={'#0088cc'} iconPrimary={Send2} />
      </Grid>
      <Grid item xs={12} md={4} lg={3} sm={6}>
        <ReportCard primary="145" secondary="YouTube" color={theme.palette.error.main} iconPrimary={Youtube} />
      </Grid>
      <Grid item xs={12} md={4} lg={3} sm={6}>
        <ReportCard primary="290+" secondary="Facebook" color={'#1975EB'} iconPrimary={Facebook} />
      </Grid>
      <Grid item xs={12} md={4} lg={3} sm={6}>
        <ReportCard primary="500" secondary="Instagram" color={'#D9236C'} iconPrimary={Instagram} />
      </Grid>

      <Grid item xs={12} md={4} lg={3} sm={6}>
        <ReportCard primary="500" secondary="Search Engines" color={'#F6BA00'} iconPrimary={GlobalSearch} />
      </Grid>
      <Grid item xs={12} md={4} lg={3} sm={6}>
        <ReportCard primary="500" secondary="Drive Links" color={'#209F61'} iconPrimary={GoogleDrive} />
      </Grid>
      <Grid item xs={12} md={4} lg={3} sm={6}>
        <ReportCard primary="500" secondary="Download Links" color={'#00CABB'} iconPrimary={DocumentDownload} />
      </Grid>
      <Grid item xs={12} md={4} lg={3} sm={6}>
        <ReportCard primary="500" secondary="Twitter" color={'#209CEB'} iconPrimary={Message} />
      </Grid>
      <Grid item lg={12}>
        <Typography variant="h3" mb={2} mt={3} pl={1}>
          Links
        </Typography>
        <CustomTable columns={columns} data={data} title="Added Links" />
      </Grid>
    </Grid>
  );
};

export default ProjectDetails;
