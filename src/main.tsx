import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import React from 'react';

const rootElement = document.getElementById('root') as HTMLElement;
const appElement = document.createElement('div');
appElement.id = 'app';

try {
  const saved = localStorage.getItem('theme');
  appElement.dataset.theme = saved === 'light' ? 'light' : 'dark';
} catch {
  appElement.dataset.theme = 'dark';
}

rootElement.appendChild(appElement);

const root = ReactDOM.createRoot(appElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
