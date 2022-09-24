import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Calendar, Message, Settings, Team } from './components';
import ErrorPage from "./error-page";
import Aside from './root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Aside />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/messages",
        element: <Message />
      },
      {
        path: "/team-members",
        element: <Team />
      },
      {
        path: "/calendar",
        element: <Calendar />
      },
      {
        path: "/settings",
        element: <Settings />
      }
    ]
  }
]);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);