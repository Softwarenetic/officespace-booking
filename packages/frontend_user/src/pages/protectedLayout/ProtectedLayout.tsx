import {Box} from '@mui/material';
import {Navigate, Outlet} from 'react-router-dom';
import SideAppBar from '../../components/sideAppBar/SideAppBar';
import './ProtectedLayout.scss';
import {useAppSelector} from "../../hooks/redux";

const ProtectedLayout: React.FC = () => {
    const {isAuthenticated} = useAppSelector((state) => state.authReducer)

    return !isAuthenticated ? <Navigate to="/login"/> : (
        <>
            <Box className="container">
                <SideAppBar/>
                <Outlet></Outlet>
            </Box>
        </>
    );
};
export default ProtectedLayout;
