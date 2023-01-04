import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SideAppBar from '../../components/sideAppBar/SideAppBar';
import './RootLayout.scss';
const RootLayout: React.FC = () => {
  return (
    <>
      <Box className="container">
        <SideAppBar />
        <Outlet></Outlet>
      </Box>
    </>
  );
};
export default RootLayout;
