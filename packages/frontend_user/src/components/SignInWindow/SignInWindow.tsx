import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './SignInWindow.css'


const SignInWindow:React.FC = ()=>{

    return (
        <Box className='signInContainer' >
            <Typography  variant="h4" gutterBottom> Workplace Booking System </Typography>
            <Button variant="contained" size="small" style={{margin:'20px',padding:'5px 40px',backgroundColor:'black'}}>Log in with Google </Button>
        </Box>
    )

}

export default SignInWindow