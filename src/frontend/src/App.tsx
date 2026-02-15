import { RouterProvider, createRouter, createRoute, createRootRoute, createHashHistory } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { InternetIdentityProvider } from './hooks/useInternetIdentity';
import SiteLayout from './components/SiteLayout';
import IntroPage from './pages/IntroPage';
import HomePage from './pages/HomePage';
import RanksPage from './pages/RanksPage';
import DivisionsPage from './pages/DivisionsPage';
import UniformArmorVariantsByRankPage from './pages/UniformArmorVariantsByRankPage';
import HistoryPage from './pages/HistoryPage';
import PhotoPage from './pages/PhotoPage';
import NotFound from './components/NotFound';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const rootRoute = createRootRoute({
  component: SiteLayout,
  notFoundComponent: NotFound,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IntroPage,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/home',
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
  homeRoute,
  ranksRoute,
  divisionsRoute,
  loreRoute,
  historyRoute,
  photoRoute,
]);

const hashHistory = createHashHistory();

const router = createRouter({ 
  routeTree,
  history: hashHistory,
  defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <InternetIdentityProvider>
        <RouterProvider router={router} />
      </InternetIdentityProvider>
    </QueryClientProvider>
  );
}
