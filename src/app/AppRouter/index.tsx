import { ReactNotifications } from 'react-notifications-component';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { Page, ScrollToTop } from 'components';

import ErrorPage from 'src/features/ErrorBoundaries/ErrorPage';
import NotFoundRoute from 'src/features/ErrorBoundaries/NotFoundRoute';
import Landing from 'src/features/LandingPage';
import Library from 'features/Library';

import Init from './Init';

const isDevelopment = import.meta.env.VITE_NODE_ENV === 'development';

export const ROUTE_PATH = {
  landing: '/',
  library: '/lib'
};

const devRoutes = isDevelopment
  ? [
      {
        path: ROUTE_PATH.library,
        element: <Library />
      }
    ]
  : [];

const RouterComponents = () => (
  <>
    <Init />
    <ScrollToTop />
    <ReactNotifications />
    <Outlet />
  </>
);

export const router = createBrowserRouter([
  {
    element: <RouterComponents />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTE_PATH.landing,
        element: <Page />,
        children: [
          ...devRoutes,
          {
            path: ROUTE_PATH.landing,
            element: <Landing />
          }
        ]
      },
      {
        path: '*',
        element: <NotFoundRoute />
      }
    ]
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
