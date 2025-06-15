import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { AuthContextProvider } from './context/authContext';

import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
