import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ThemeContextProvider from './context/ThemeContext.jsx'
import './index.css'
import App from './App.jsx'
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <App />
    <ToastContainer />
  </ThemeContextProvider>
  
)

AOS.init({
  offset: 0
});
