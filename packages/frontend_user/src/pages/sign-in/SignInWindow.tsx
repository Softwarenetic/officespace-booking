import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './SignInWindow.css'
import Grid from '@mui/material/Grid';
import axios from "axios";
import {gapi} from "gapi-script";
import React, {useEffect} from 'react';
import logo from './logo.svg';
import {GoogleOAuthProvider, GoogleLogin} from "@react-oauth/google";


const SignInWindow: React.FC = () => {
    const GOOGLE_CLIENT_ID = '932663426648-82mkdignd0jnvhgpbvv8mdiloo40h6rr.apps.googleusercontent.com';

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: process.env.GOOGLE_CLIENT_ID,
                scope: ["email", "profile"],
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onFailure = (): void => {
        console.log('failed');
    };

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{minHeight: '100vh'}}
        >
            <Box className='signInContainer'>
                <Typography variant="h4"> Workplace Booking System </Typography>
                <Button variant="contained" size="small"
                        style={{margin: '20px', padding: '8px 45px', backgroundColor: 'black'}}>Log in with
                    Google </Button>
                <GoogleOAuthProvider
                    clientId={GOOGLE_CLIENT_ID!}
                >
                    <GoogleLogin
                        onSuccess={async (credentialResponse) => {
                            debugger;
                            console.log(credentialResponse);
                            const {data} = await axios.post(
                                "http://localhost:4000/login",
                                {token: credentialResponse.credential}
                            );
                            localStorage.setItem("AuthData", JSON.stringify(data));
                            alert(data["message"]);
                        }}
                        onError={onFailure}
                    />
                </GoogleOAuthProvider>
            </Box>
        </Grid>

    )

}

export default SignInWindow
