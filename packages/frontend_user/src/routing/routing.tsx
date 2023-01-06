import {createBrowserRouter} from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import ProtectedLayout from '../pages/protectedLayout/ProtectedLayout';
import SignInWindow from '../pages/sign-in/SignInWindow';
import UserProfile from '../pages/userProfile/UserProfile';
import MainPage from "../pages/mainPage/MainPage";

export const routing = createBrowserRouter([
    {
        path: '/',
        element: <ProtectedLayout/>,
        children: [
            {
                element: <MainPage/>,
                index: true,
            },
            {
                path: '/settings',
                element: <UserProfile/>,
            },
        ],
    },
    {
        path: '/login',
        element: <SignInWindow/>,
    },
    {
        path: '*',
        element: <NotFound/>,
    },
]);
