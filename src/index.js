import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/main.css';
import './Styles/home.css';
import './Styles/projects.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </React.StrictMode>
);

