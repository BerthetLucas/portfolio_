import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { ThemeProvider } from './components/ThemeProvider';
import { ProjectDetails } from './components/ProjectDetails/ProjectDetails';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/projects/:projectId', element: <ProjectDetails /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
