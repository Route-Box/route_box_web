import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@radix-ui/themes/styles.css';
import { ThemePanel } from '@radix-ui/themes';

// Import the generated route tree
import { routeTree } from './routeTree.gen';
import QueryClientWrapper from './QueryClientWrapper';
import { ThemeProvider, customThemeColors } from './theme/theme';
import './index.css';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// 커스텀 테마 스타일 적용
const styleElement = document.createElement('style');
styleElement.textContent = customThemeColors;
document.head.appendChild(styleElement);

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientWrapper>
        <ThemeProvider>
          <RouterProvider router={router} />
          <ToastContainer />
          <ThemePanel />
        </ThemeProvider>
      </QueryClientWrapper>
    </StrictMode>
  );
}
