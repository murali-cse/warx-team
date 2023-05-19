import { Link } from 'react-router-dom';
import { To } from 'history';

// material-ui
import { ButtonBase } from '@mui/material';
import { SxProps } from '@mui/system';

// project-imports
// import Logo from './LogoMain';
// import LogoIcon from './LogoIcon';
import logo from 'assets/vector/warx-logo.svg';
import { APP_DEFAULT_PATH } from 'config';

// ==============================|| MAIN LOGO ||============================== //

interface Props {
  reverse?: boolean;
  isIcon?: boolean;
  sx?: SxProps;
  to?: To;
}

const LogoSection = ({ reverse, isIcon, sx, to }: Props) => (
  <ButtonBase
    disableRipple
    component={Link}
    to={!to ? APP_DEFAULT_PATH : to}
    style={{ alignItems: 'left', justifyContent: isIcon ? 'center' : 'left' }}
  >
    {/* {isIcon ? <LogoIcon /> : <Logo reverse={reverse} />} */}
    <img src={logo} alt="warx logo" style={{ width: isIcon ? '55%' : '50%' }} />
  </ButtonBase>
);

export default LogoSection;
