import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import RootLayout from "../pages/rootLayout/RootLayout";
import SignInWindow from "../pages/sign-in/SignInWindow";
import UserProfile from "../pages/userProfile/UserProfile";
import UserSettings from "../pages/userSettings/UserSettings";

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        element: <MainPage />,
        index: true,
      },
      {
        path: "/settings",
        element: <UserProfile />,
      },
      
    ],
  },
  {
    path: "/login",
    element: <SignInWindow />,
  },
]);
