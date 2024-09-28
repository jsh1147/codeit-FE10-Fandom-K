import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './Router';
import './styles/global.css';
import './styles/reset.css';
import './styles/variables.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
