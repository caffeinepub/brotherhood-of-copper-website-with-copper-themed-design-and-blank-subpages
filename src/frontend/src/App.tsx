import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import RanksPage from './pages/RanksPage';
import DivisionsPage from './pages/DivisionsPage';
import UniformArmorVariantsByRankPage from './pages/UniformArmorVariantsByRankPage';
import HistoryPage from './pages/HistoryPage';
import PhotoPage from './pages/PhotoPage';

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
  component: DivisionsPage,
});

const loreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/lore',
  component: UniformArmorVariantsByRankPage,
});

const historyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/history',
  component: HistoryPage,
});

const photoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/photo',
  component: PhotoPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  ranksRoute,
  divisionsRoute,
  loreRoute,
  historyRoute,
  photoRoute,
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
