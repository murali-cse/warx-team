// material-ui
import { Grid } from '@mui/material';

// project-imports
// import MyTask from 'sections/widget/data/MyTask';
import UserPersonalData from 'sections/widget/data/UserPersonalData';

// ===========================|| WIDGET - DATA ||=========================== //

const Project = () => (
  <Grid container spacing={3}>
    <Grid item lg={12}>
      <h1>Projects</h1>
    </Grid>
    {/* row 1 */}
    <Grid item xs={12} md={6} lg={4}>
      <UserPersonalData />
    </Grid>
  </Grid>
);

export default Project;
