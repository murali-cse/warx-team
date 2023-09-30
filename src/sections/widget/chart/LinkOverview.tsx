// material-ui
import { Chip, Stack, Typography } from '@mui/material';

// project-imports
import RepeatCustomerChart from './RepeatCustomerChart';
import MainCard from 'components/MainCard';

// ==============================|| CHART - REPEAT CUSTOMER RATE ||============================== //

const LinkOverview = () => {
  return (
    <MainCard>
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
        <Typography variant="h5">Links Overview</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={0.5} sx={{ mt: 1 }}>
        <Typography variant="subtitle1">5.44%</Typography>
        <Chip color="success" variant="filled" label="+2.6%" size="small" sx={{ bgcolor: 'success.main', borderRadius: 1 }} />
      </Stack>
      <RepeatCustomerChart />
    </MainCard>
  );
};

export default LinkOverview;
