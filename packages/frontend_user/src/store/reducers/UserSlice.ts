import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState {
  user: IUser;
  isLoading: boolean;
  sayHello: string;
}

const initialState: UserState = {
  user: <IUser>{},
  isLoading: false,
  sayHello: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    sayHello(state, action: PayloadAction<string>) {
      state.sayHello = action.payload;
    },
  },
});

export default userSlice.reducer;
