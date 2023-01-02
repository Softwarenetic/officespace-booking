import { configs } from "../../config/config";
import { AppDispatch } from "../store";

export const fetchGreeting = () => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(configs.baseUrl);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
