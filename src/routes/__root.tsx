import { GlobalStyle } from '@/styles';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <GlobalStyle />
      <Outlet />
      {import.meta.env.VITE_APP_BUILD_ENV !== 'production' && <TanStackRouterDevtools />}
    </>
  ),
});
