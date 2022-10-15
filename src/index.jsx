import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


import './index.css';
import NavBar from './components/NavBar';
import DCPage from './pages/DCPage';
import HeroDetailPage from './pages/HeroDetailPage';
import HomePage from './pages/HomePage';
import MarvelPage from './pages/MarvelPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar /> ,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'marvel',
        element: <MarvelPage />,
      },
      {
        path: 'dc',
        element: <DCPage />,
      },
      {
        path: 'hero-detail/:slug',
        element: <HeroDetailPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
