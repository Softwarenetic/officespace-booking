import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import { logoutSuccess} from "../../store/reducers/UserSlice";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux";

const MainPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    return (
        <Box>
            <Typography variant="h4">Main page</Typography>
            <Button value={"Logout"} onClick={() => {
                dispatch(logoutSuccess());
                navigate("/");
            }}>Logout</Button>
        </Box>
    );
};

export default MainPage;
