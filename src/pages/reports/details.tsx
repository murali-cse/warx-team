import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router';

const ReportDetails = () => {
  const navigate = useNavigate();

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

  let linksArr: string[] = links.split('\n');

  return (
    <Grid container>
      <Grid container alignItems={'center'}>
        <Grid item lg={10}>
          <h1>Reports</h1>
        </Grid>
        <Grid item lg={2}>
          <Button variant="outlined" onClick={() => navigate(-1)}>
            Back
          </Button>
        </Grid>
      </Grid>

      <Grid item lg={12}>
        {linksArr.map((e) => (
          <p key={e}>{e}</p>
        ))}
        <h3>Attachments</h3>
        <img
          src={'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
          alt="attachment-1"
          style={{
            height: '200px',
            aspectRatio: '16/9'
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ReportDetails;
