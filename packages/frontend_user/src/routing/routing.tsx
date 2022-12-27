import { createBrowserRouter } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import MainPage from "../pages/mainPage/MainPage";
import RootLayout from "../pages/rootLayout/RootLayout";
import SignInWindow from "../pages/sign-in/SignInWindow";
import UserSettings from "../pages/userSettings/UserSettings";
import ProtectedRoutes from "./protectedRoutes";


export const routing = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        element: <ProtectedRoutes/>,
        index: true,
      },
      {
        path: "/settings",
        element: <UserSettings />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignInWindow />,
  },
]);
