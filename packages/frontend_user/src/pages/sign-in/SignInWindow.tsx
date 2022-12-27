import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import { gapi } from "gapi-script";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "./SignInWindow.scss";
import {configs} from '../../config/config';


const SignInWindow: React.FC = () => {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.GOOGLE_CLIENT_ID,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onFailure = (): void => {
    console.log("failed");
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight={"100vh"}
    >
      <Box className="signInContainer">
        <Typography variant="h4"> Workplace Booking System </Typography>
      </Box>
      <GoogleOAuthProvider clientId={configs.googleClientId}>
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            console.log(credentialResponse);
            const { data } = await axios.post(
              `${configs.baseUrl}/login`,
              {
                token: credentialResponse.credential,
              }
            );
            localStorage.setItem("AuthData", JSON.stringify(data));
            alert("success");
          }}
          onError={onFailure}
        />
      </GoogleOAuthProvider>
    </Grid>
  );
};

export default SignInWindow;
