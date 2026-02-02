/**
 * main.tsx
 * 
 * This is the entry point of your React application.
 * We set up React Router here to enable navigation between pages.
 * 
 * BEGINNER TIP: BrowserRouter wraps your entire app and enables
 * the use of Links and Routes for navigation.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// Get the root element from index.html
const rootElement = document.getElementById('root');

// Create and render the React app
createRoot(rootElement!).render(
  <StrictMode>
    {/* BrowserRouter enables routing in the app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
