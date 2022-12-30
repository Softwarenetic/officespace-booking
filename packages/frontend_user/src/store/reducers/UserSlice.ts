import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";

interface UserState {
    user: IUser;
    isLoading: boolean;
    sayHello: string;
    accessToken: string | boolean;
}

const initialState: UserState = {
    user: JSON.parse(localStorage.getItem("user")!) || <IUser>{},
    isLoading: false,
    sayHello: "",
    accessToken: localStorage.getItem("accessToken") || false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess(state, action) {
            localStorage.setItem("accessToken", action.payload);
            state.accessToken = action.payload;
        },
        logoutSuccess(state) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("user");
            state.accessToken = "";
            state.user = <IUser>{};
        },
        setProfile(state, action) {
            state.user = <IUser>action.payload;
        }
    },
});

export const {loginSuccess, logoutSuccess} = userSlice.actions
export default userSlice.reducer;
