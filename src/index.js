import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AnimatedBackground from './components/AnimatedBackground';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnimatedBackground />
    <App />
  </React.StrictMode>
);

