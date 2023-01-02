
import Box from '@mui/material/Box';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import "./SideAppBar.scss"
import LogoutIcon from '@mui/icons-material/Logout';
import StarIcon from '@mui/icons-material/Star';
import { grey } from '@mui/material/colors';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    secondary:{
      main: grey[500]
    },
  },
});


function SideAppBar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Box className="container_nav">
      <Box className='logo'>
        <span>Logo</span>
      </Box>
      <Box  className='btn office'>
        <StarIcon color='secondary' sx={{ fontSize: 20 }} style={{paddingTop:'10px'}}/>
      <NavLink className='btn' to={'/'}>Office</NavLink>
      </Box>
      <Box className='btn out'>
      <LogoutIcon color='secondary' sx={{ fontSize: 20 }} />
      <NavLink className='btn' to={'/settings'}>Log out</NavLink>
      </Box>

    </Box>
  );
}
export default SideAppBar;
