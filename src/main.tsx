import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n/config';
import App from './App';  
import React from 'react';  

const rootElement = document.getElementById('root') as HTMLElement;

const appElement = document.createElement('div');
appElement.id = 'app';
const initialLang = localStorage.getItem('language') || 'hu';
appElement.dataset.language = initialLang;
appElement.setAttribute('lang', initialLang);
rootElement.appendChild(appElement);

const root = ReactDOM.createRoot(appElement);
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
