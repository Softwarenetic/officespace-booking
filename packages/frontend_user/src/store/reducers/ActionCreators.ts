import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";

export const fetchGreeting = () => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch("http://localhost:4000/");
    const data = await response.json();
    
  } catch (e) {
    console.log(e);
  }
};
