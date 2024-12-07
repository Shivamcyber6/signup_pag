import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Create a root container using the new API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app inside the root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
