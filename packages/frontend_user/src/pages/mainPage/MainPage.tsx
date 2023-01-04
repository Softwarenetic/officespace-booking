import image from '../../assets/image.png';
import './MainPage.scss';
import BasicTable from '../../components/table/Table';
import { Box, Paper } from '@mui/material';
import DatePicker from '../../components/datePicker/DatePicker';
import BasicMenu from '../../components/popupProfileMenu/PopupProfileMenu';

const MainPage: React.FC = () => {
  return (
    <Box className="main_page_container">
      <Box className="image_container">
        <img src={image} alt="office_img" />
      </Box>
      <Paper elevation={3} className="date_container">
        <DatePicker />
      </Paper>
      <Box className="user_icon">
        <BasicMenu />
      </Box>
      <Box className="table-item">
        <BasicTable />
      </Box>
    </Box>
  );
};

export default MainPage;
