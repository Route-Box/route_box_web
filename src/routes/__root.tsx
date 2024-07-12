import { GlobalStyle } from '@/components/styles';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <GlobalStyle />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
