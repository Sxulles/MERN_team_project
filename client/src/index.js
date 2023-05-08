import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './components/Main';
import Game from './components/Game';
import Info from './components/Info';
import Credit from './components/Credit';
import Quit from './components/Quit';
import ErrorPage from './components/ErrorPage';
import Profile from './components/Profile';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import { AuthProvider, RequireAuth } from 'react-auth-kit';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/game",
          element: <Game /> //<RequireAuth><Game /></RequireAuth>
        },
        {
          path: "/info",
          element: <Info />,
        },
        {
          path: "/credit",
          element: <Credit />,
        },
        {
          path: "/quit",
          element: <Quit />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/leaderboard",
          element: <Leaderboard />,
        }
      ],
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider 
      authType={'cookie'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      cookieSecure={false}>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();