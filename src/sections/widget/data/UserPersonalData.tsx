// material-ui
import { AvatarGroup, Button, Grid, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography, Box, Tooltip } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
// import IconButton from 'components/@extended/IconButton';

// assets
import { Clock } from 'iconsax-react';
import { Link } from 'react-router-dom';
// import AssignUsers from '../statistics/AssignUsers';
const avatarImage = require.context('assets/images/users', true);

// ===========================|| DATA WIDGET - USER PERSONAL DATA ||=========================== //

const UserPersonalData = () => {
  return (
    <MainCard
      title={
        <List disablePadding>
          <ListItem
            sx={{ p: 0, '& .MuiListItemSecondaryAction-root': { right: '0px' } }}
            secondaryAction={
              <Box sx={{ width: 186, textAlign: 'right' }}>
                <Tooltip
                  // open={show}
                  placement="top-end"
                  title={
                    <AvatarGroup max={10}>
                      <Avatar alt="Agnes Walker" src={avatarImage(`./avatar-4.png`)} />
                      <Avatar alt="Trevor Henderson" src={avatarImage(`./avatar-5.png`)} />
                    </AvatarGroup>
                  }
                >
                  <AvatarGroup
                    sx={{
                      '& .MuiAvatarGroup-avatar': { bgcolor: 'primary.main', cursor: 'pointer' },
                      justifyContent: 'end',
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        fontSize: '0.875rem',
                        bgcolor: 'primary.lighter',
                        color: 'primary.main',
                        ml: -1.25
                      }
                    }}
                    max={4}
                    componentsProps={{
                      additionalAvatar: {}
                    }}
                  >
                    <Avatar alt="Remy Sharp" src={avatarImage(`./avatar-1.png`)} />
                    <Avatar alt="Travis Howard" src={avatarImage(`./avatar-2.png`)} />
                    <Avatar alt="Cindy Baker" src={avatarImage(`./avatar-3.png`)} />
                    <Avatar alt="Agnes Walker" src={avatarImage(`./avatar-4.png`)} />
                    <Avatar alt="Trevor Henderson" src={avatarImage(`./avatar-5.png`)} />
                  </AvatarGroup>
                </Tooltip>
              </Box>
            }
            // secondaryAction={
            //   <IconButton edge="end" aria-label="delete" color="secondary">
            //     <Notepad />
            //   </IconButton>
            // }
          >
            <ListItemAvatar>
              <Avatar color="error" variant="rounded">
                <Typography fontWeight={'bold'}>L</Typography>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              sx={{ my: 0 }}
              // primary={<Typography>Google LLC</Typography>}
              secondary={<Typography variant="subtitle1">Lyca</Typography>}
            />
          </ListItem>
        </List>
      }
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Description</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley.
          </Typography>
        </Grid>
        {/* <Grid item xs={12}>
          <Stack direction="row" alignItems="center" spacing={1.25}>
            <Chip label="Fulltime" variant="combined" sx={{ color: 'text.primary' }} />
            <Chip label="Remote" variant="combined" sx={{ color: 'text.primary' }} />
            <Chip label="Hourly" variant="combined" sx={{ color: 'text.primary' }} />
          </Stack>
        </Grid> */}
        <Grid item xs={12}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1} sx={{ mt: 1.5 }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {/* <Location size={14} /> NY, USA  */}
              <Clock size={14} style={{ marginLeft: 8 }} /> 2 days ago
            </Typography>
            <Link to={'details'}>
              <Button variant="contained">View</Button>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default UserPersonalData;
