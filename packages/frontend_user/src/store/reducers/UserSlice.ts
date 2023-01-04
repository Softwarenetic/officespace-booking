import {createSlice} from "@reduxjs/toolkit";
import { getAuthToken, removeAuthToken, setupAxiosAuth } from "../../config/setup";

interface AuthState {
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    isAuthenticated: !!getAuthToken()
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(state) {
            setupAxiosAuth();
            state.isAuthenticated = true;
        },
        logoutSuccess(state) {
            removeAuthToken();
            state.isAuthenticated = false;
        }
    },
});

export const {loginSuccess, logoutSuccess} = authSlice.actions
export default authSlice.reducer;
