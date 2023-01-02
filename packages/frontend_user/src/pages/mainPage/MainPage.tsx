import image from '../../assets/image.png';
import './MainPage.scss';
import BasicTable from '../../components/table/Table';
import { Box } from '@mui/material';
import DatePicker from '../../components/datePicker/DatePicker';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BasicMenu from '../../components/popupProfileMenu/PopupProfileMenu';

const MainPage: React.FC = () => {
    
    
    
    return (
        <Box className='main_container'>
            <Box className='user_icon'>
            <BasicMenu/>
            </Box>
            <Box>
            <img src={image} className="image" alt="picture" />
            </Box>
            <Box className='date_container'>
            <DatePicker/>
            </Box>
            <Box>
            <BasicTable/>
            </Box>
        </Box>
    
  );
};

export default MainPage;
