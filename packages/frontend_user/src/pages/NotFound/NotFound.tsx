import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import "./NotFound.scss";

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound">
      <Typography variant="h1">404</Typography>
      <Typography variant="h6">The page doesn’t exist.</Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Back Home
      </Button>
    </div>
  );
};

export default NotFound;
