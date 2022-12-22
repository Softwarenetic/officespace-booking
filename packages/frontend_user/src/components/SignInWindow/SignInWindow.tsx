import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './SignInWindow.css'
import Grid from '@mui/material/Grid';


const SignInWindow:React.FC = ()=>{

    return (
       <Grid
       container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
       >
            <Box className='signInContainer' >
                <Typography  variant="h4"> Workplace Booking System </Typography>
                <Button variant="contained" size="small" style={{margin:'20px',padding:'8px 45px',backgroundColor:'black'}}>Log in with Google </Button>
            </Box>
       </Grid>
       
    )

}

export default SignInWindow