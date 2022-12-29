import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState {
  user: IUser;
  isLoading: boolean;
  sayHello: string;
  isAuthenticated: string | boolean;
}

const initialState: UserState = {
  user: <IUser>{},
  isLoading: false,
  sayHello: "",
  isAuthenticated: localStorage.getItem("authApp") || false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess(state) {
      localStorage.setItem("authApp", "true");
      state.isAuthenticated = true;
    },
    logoutSuccess(state) {
      localStorage.removeItem("authApp");
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logoutSuccess } = userSlice.actions
export default userSlice.reducer;
