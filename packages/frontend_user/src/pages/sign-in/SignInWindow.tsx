import Box from '@mui/material/Box';
import React, {useEffect, useState} from 'react';
import {gapi} from 'gapi-script';
import {GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google';
import axios from 'axios';
import './SignInWindow.scss';
import {configs} from '../../config/config';
import {useAppDispatch} from '../../hooks/redux';
import {useNavigate} from 'react-router-dom';
import {loginSuccess} from '../../store/reducers/UserSlice';
import picture from '../../assets/61f134d31a80c10b8052cbb30c7a46ae.jpg';
import {setAuhtToken} from '../../config/setup';
import {Alert, AlertTitle} from "@mui/material";

const SignInWindow: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [message, setMessage] = useState('');

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: process.env.GOOGLE_CLIENT_ID,
                scope: ['profile', 'email'],
            });
        };
        gapi.load('client:auth2', initClient);
    });

    useEffect(() => {
        const messageTimeout = setTimeout(() => {
            setMessage('');
            clearTimeout(messageTimeout);
        }, 3000);
    }, [message])

    const onFailure = () => {
        setMessage('Google login failed');
    };

    return (
        <Box className="main_container">
            <Box className='polygon_1 triangle_3'></Box>
            <Box className="triangle_1"></Box>
            <Box className="triangle_2"></Box>
            <Box className='triangle_3'></Box>
            <Box className='signPicture'>
                <img src={picture} alt="office_img"/>
            </Box>
            <Box className="sign_container">
                <Box className='logo_container'>
                    <p className='title'> Workplace Booking System </p>
                    <Box className='sign_btn'>
                        <GoogleOAuthProvider clientId={configs.googleClientId}>
                            <GoogleLogin
                                onSuccess={async (credentialResponse) => {
                                    try {
                                        const {data} = await axios.post('/login0', {
                                            token: credentialResponse.credential,
                                        });
                                        setAuhtToken(data.data && data.data.access_token);
                                        dispatch(loginSuccess());
                                        navigate('/');
                                    } catch (e: any) {
                                        setMessage(e['response']['data']['message']);
                                    }
                                }}
                                onError={onFailure}
                            />
                        </GoogleOAuthProvider>
                    </Box>
                    {message !== '' ? (<Alert sx={{margin: "1rem"}} severity="error">
                        <AlertTitle>{message}</AlertTitle>
                        Something went wrong. <strong>Try again or later</strong>
                    </Alert>) : ''
                    }
                </Box>
            </Box>
        </Box>
    );
};

export default SignInWindow;
