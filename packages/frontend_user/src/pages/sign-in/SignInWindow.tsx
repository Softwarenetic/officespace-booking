import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './SignInWindow.scss';
import { configs } from '../../config/config';
import { useAppDispatch } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../store/reducers/UserSlice';
import picture from '../../assets/61f134d31a80c10b8052cbb30c7a46ae.jpg'

const SignInWindow: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.GOOGLE_CLIENT_ID,
        scope: ['profile', 'email'],
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onFailure = (): void => {
    console.log('failed');
  };

  dispatch(userSlice.actions.loginSuccess);

  return (
    <Grid container className='signPicture'>

        <Grid item xs={6}>
        <img src={picture} alt="signin page picture" />
        </Grid>
        <Grid item xs={4}>

        <Grid container spacing={5} direction="column" alignItems="center" justifyContent="center" minHeight={'100vh'}>
      <Grid >
        <Box >
          <Typography variant="h4"> Workplace Booking System </Typography>
        </Box>
      </Grid>
      <Grid mt={6}>
        <GoogleOAuthProvider clientId={configs.googleClientId}>
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              console.log(credentialResponse);
              const { data } = await axios.post(`${configs.baseUrl}/login`, {
                token: credentialResponse.credential,
              });
              localStorage.setItem('AuthData', JSON.stringify(data.data));
              dispatch(loginSuccess());
              return data.message === 'success' ? navigate('/') : alert(data.message);
            }}
            onError={onFailure}
          />
        </GoogleOAuthProvider>
      </Grid>
    </Grid>
    </Grid>
    </Grid>
  );
};

export default SignInWindow;
