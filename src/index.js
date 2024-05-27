import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={'https://rithik18.github.io/presidio_off_frontend/'}>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);


