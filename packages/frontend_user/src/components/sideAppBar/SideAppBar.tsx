import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import './SideAppBar.scss';
import LogoutIcon from '@mui/icons-material/Logout';
import { grey } from '@mui/material/colors';
import HomeIcon from '@mui/icons-material/Home';
import { createTheme } from '@mui/material/styles';
import { logoutSuccess } from '../../store/reducers/UserSlice';
import { Typography } from '@mui/material';

export const theme = createTheme({
  palette: {
    secondary: {
      main: grey[500],
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
  },
});

function SideAppBar() {
  const dispatch = useAppDispatch();

  return (
    <Box className="container_nav">
      <Box className="logo">
        <Typography variant="body1">Logo</Typography>
      </Box>
      <Box className="btn office">
        <HomeIcon color="secondary" sx={{ fontSize: 20 }} />
        <Box>
          <NavLink className="btn" to={'/'}>
            Office
          </NavLink>
        </Box>
      </Box>
      <Box className="btn out">
        <LogoutIcon color="secondary" sx={{ fontSize: 20 }} />
        <Box>
          <NavLink className="btn" to={'/login'} onClick={() => dispatch(logoutSuccess())}>
            Log out
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
}
export default SideAppBar;
