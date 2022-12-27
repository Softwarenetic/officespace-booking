import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import RootLayout from "../pages/rootLayout/RootLayout";
import SignInWindow from "../pages/sign-in/SignInWindow";
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
        element: <UserSettings />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignInWindow />,
  },
]);
