import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import MainPage from "../pages/mainPage/MainPage";


export default function ProtectedRoutes() {

    const isAuthenticated = useAppSelector((state) => state.userReducer.accessToken)
    

  return  isAuthenticated ? <MainPage /> : <Navigate to="/login" />;
}
