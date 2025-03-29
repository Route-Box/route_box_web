import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import the generated route tree
import { routeTree } from './routeTree.gen';
import QueryClientWrapper from './QueryClientWrapper';
import setupLocatorUI from '@locator/runtime';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  if (import.meta.env.VITE_APP_BUILD_ENV === 'development') {
    setupLocatorUI();
  }
  root.render(
    <StrictMode>
      <QueryClientWrapper>
        <RouterProvider router={router} />
        <ToastContainer />
      </QueryClientWrapper>
    </StrictMode>
  );
}
