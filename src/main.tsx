import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import AboutMe from './components/AboutMe.tsx';
import Portfolio from './components/Portfolio.tsx';
import Cv from './components/Cv.tsx';
import Contact from './components/Contact.tsx';
import Services from './components/Services.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // layout with Header, Outlet, Footer
    children: [
      { path: 'cv', element: <Cv /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'about', element: <AboutMe /> },
      { path: 'contact', element: <Contact /> },
      { path: 'services', element: <Services /> }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
