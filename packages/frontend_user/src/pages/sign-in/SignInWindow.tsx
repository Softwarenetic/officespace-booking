import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import React, { useEffect } from "react";
import { gapi } from "gapi-script";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "./SignInWindow.scss";

const SignInWindow: React.FC = () => {
 

  const GOOGLE_CLIENT_ID =
    "932663426648-82mkdignd0jnvhgpbvv8mdiloo40h6rr.apps.googleusercontent.com";
  alert(GOOGLE_CLIENT_ID);
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
        <Button
          variant="contained"
          size="small"
          style={{
            margin: "20px",
            padding: "8px 45px",
            backgroundColor: "black",
          }}
          href="http://localhost:4000/login"
        >
          Log in with Google{" "}
        </Button>
      </Box>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID!}>
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            console.log(credentialResponse);
            const { data } = await axios.post(
              "http://localhost:4000/google/redirect",
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
