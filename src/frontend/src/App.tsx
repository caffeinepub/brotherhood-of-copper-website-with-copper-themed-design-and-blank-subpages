import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import RanksPage from './pages/RanksPage';
import BlankPage from './pages/BlankPage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const ranksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ranks',
  component: RanksPage,
});

const divisionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/divisions',
  component: BlankPage,
});

const loreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/lore',
  component: BlankPage,
});

const historyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/history',
  component: BlankPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  ranksRoute,
  divisionsRoute,
  loreRoute,
  historyRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
