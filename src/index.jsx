import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DCPage from './pages/DCPage';
import HeroDetailPage from './pages/HeroDetailPage';
import HomePage from './pages/HomePage';
import MarvelPage from './pages/MarvelPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
    {/* <DCPage />
    <MarvelPage />
    <HeroDetailPage /> */}
  </React.StrictMode>
);
