import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import RootLayout from '../pages/rootLayout/RootLayout';
import SignInWindow from '../pages/sign-in/SignInWindow';
import UserProfile from '../pages/userProfile/UserProfile';
import ProtectedRoutes from './protectedRoutes';

export const routing = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <ProtectedRoutes />,
        index: true,
      },
      {
        path: '/settings',
        element: <UserProfile />,
      },
    ],
  },
  {
    path: '/login',
    element: <SignInWindow />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
