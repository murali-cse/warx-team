// material - ui;
import { useTheme } from '@mui/material/styles';
import { Button, Grid, Typography } from '@mui/material';
import { Chip } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

// project-imports
import ReportCard from 'components/cards/statistics/ReportCard';

// assets
import {
  DocumentDownload,
  Youtube,
  Facebook,
  Instagram,
  GlobalSearch,
  GoogleDrive,
  Send2,
  Diagram,
  Message,
  Edit,
  Trash,
  Eye
} from 'iconsax-react';

import { useEffect, useMemo, useState } from 'react';

// material-ui
// import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';

import makeData from 'data/react-table';

import CustomTable from 'components/CustomTable';

const ProjectDetails = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [filteredArr, setFilteredArr] = useState<string[]>([]);

  const data = useMemo(() => makeData(2000), []);
  const columns = useMemo(
    () => [
      {
        Header: 'Platform',
        accessor: 'platform'
      },
      {
        Header: 'Links',
        accessor: 'links'
      },
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
                  <Eye size="20" color="#6499E9" onClick={handleOpen} />
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const links = `https://t.me/c/1942973741/144
  https://t.me/c/1942973741/89
  https://t.me/c/1942973741/87
  https://t.me/c/1942973741/80
  https://t.me/c/1942973741/77
  https://t.me/c/1942973741/75
  https://t.me/c/1942973741/49
  https://t.me/c/1942973741/43
  https://t.me/c/1942973741/35
  https://t.me/c/1942973741/22
  https://t.me/c/1720219136/454
  https://t.me/c/1973315902/3164
  https://t.me/c/1964681952/101
  https://t.me/c/1782523640/35
  https://t.me/c/1841247694/2110
  https://t.me/c/1904222220/2357
  https://t.me/primePlay_Babu_ji/4786
  https://t.me/c/1928531714/19
  https://t.me/c/1928531714/18
  https://t.me/c/1928531714/17
  https://t.me/c/1928531714/16
  https://t.me/c/1928531714/15
  https://t.me/c/1924906745/884
  https://t.me/Kabhi_ye_kabhi_wo_1/882
  https://t.me/c/1783739158/1668
  https://t.me/mrs_teacher2/5107
  https://t.me/Naqaab3/70
  https://t.me/c/1919916048/77
  https://t.me/c/1913688383/89
  https://t.me/c/1951211629/353
  https://t.me/c/1988375496/493
  https://t.me/c/1729532334/287
  https://t.me/c/1729532334/260
  https://t.me/c/1861717443/1329
  https://t.me/Aadhya_Paapam3_boome/27
  https://t.me/Aadhya_Papam_Orijinal/317
  https://t.me/Aadhya_Papam_Orijinal/284
  https://t.me/Aadhya_Papam_2023_New_webseries/128
  https://t.me/aadhya_papam_2023_hot_short_film/95
  https://t.me/Aadhya_Papam_2023_Boomex_full_hd/1147
  https://t.me/Aadhya_Papam_2023_Boomex_full_hd/1108
  https://t.me/Aadhya_Papam_2023_Boomex_New/1171
  https://t.me/Aadhya_Papam_2023_Boomex_New/1132
  https://t.me/Aadhya_papam_2023_Ep3_film/25
  https://t.me/Aadhya_Papam_2023_s01_boomex/25
  https://t.me/navarasa_house_boat0/8509
  https://t.me/navarasa_house_boat0/8478
  https://t.me/navarasa_house_boat0/8464
  https://t.me/navarasa_house_boat0/8432
  https://t.me/navarasa_house_boat0/8407
  https://t.me/navarasa_app/4454
  https://t.me/c/1623331284/4291
  https://t.me/c/1623331284/4265
  https://t.me/c/1860360728/79
  https://t.me/fugi_yessma_navarsa_web_uncut/3033
  https://t.me/navarsa_org/9
  https://t.me/navarsa_org/7
  https://t.me/navarsa_org/4
  https://t.me/navarsa_org/3
  https://t.me/junior_navarsa_1/21`;

  useEffect(() => {
    let linksArr: string[] = links.split('\n');
    setFilteredArr(linksArr);
  }, [links]);

  function handleFilter(v: any) {}

  return (
    <Grid container spacing={3}>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{data[0].platform}</DialogTitle>
        <DialogContent dividers={true}>
          <Grid container justifyContent={`center`} alignItems={`center`}>
            <Grid item lg={12}>
              <TextField label={'Search...'} fullWidth onChange={handleFilter} />
            </Grid>
          </Grid>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            {filteredArr.map((e) => (
              <p key={e}>{e}</p>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      <Grid item lg={12}>
        <h1>Project Title</h1>
      </Grid>
      <Grid item lg={12} textAlign={'right'}>
        <Button variant="contained">Add Links</Button>
      </Grid>
      <Grid item xs={12} md={4} lg={3} sm={6}>
        <ReportCard primary="30200" secondary="Total Links" color={theme.palette.secondary.main} iconPrimary={Diagram} />
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
