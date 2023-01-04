import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/UserSlice";
import profileReducer from "./reducers/ProfileSlice"

const rootReducer = combineReducers({
  authReducer, profileReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
