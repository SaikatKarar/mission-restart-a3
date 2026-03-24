import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from './routes/Router';
import { InstallProvider } from './context/InstallContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstallProvider>
      <RouterProvider router={router} />
    </InstallProvider>
  </StrictMode>,
)