import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  sayHello: string;
  isAuthenticated: string | boolean;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  sayHello: "",
  isAuthenticated: localStorage.getItem("authApp") || false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<string | boolean>) {
      localStorage.setItem("authApp", "true");
      state.isAuthenticated = true;
    },
    logoutSuccess(state, action: PayloadAction<string | boolean>) {
      localStorage.removeItem("authApp");
      state.isAuthenticated = false;
    },
  },
});

export default userSlice.reducer;
