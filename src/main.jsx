import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
<<<<<<< HEAD
import Router from './Router';
import './styles/global.css';
import './styles/reset.css';
import './styles/variables.css';
=======
import App from './App';
import './styles/global.css';
import './styles/reset.css';
import './styles/variables.css';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/libraryCustom.css';
>>>>>>> develop

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
