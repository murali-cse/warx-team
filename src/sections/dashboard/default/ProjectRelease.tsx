// material-ui
import { Button, Grid, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';
import Dot from 'components/@extended/Dot';

// =========================|| DATA WIDGET - ADD NEW TASK ||========================= //

const ProjectRelease = () => {
  return (
    <MainCard title="Projects">
      <Grid container spacing={1.5}>
        <Grid item xs={12}>
          <List>
            <ListItemButton sx={{ flexWrap: 'wrap', rowGap: 1 }}>
              <ListItemIcon>
                <Dot color="warning" />
              </ListItemIcon>
              <ListItemText primary="Lyca" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Dot color="warning" />
              </ListItemIcon>
              <ListItemText primary="Red Gaint" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Dot />
              </ListItemIcon>
              <ListItemText primary="AVM" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Dot color="success" />
              </ListItemIcon>
              <ListItemText primary="Dream Warriors" />
            </ListItemButton>
          </List>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="outlined">
            See More
          </Button>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default ProjectRelease;
