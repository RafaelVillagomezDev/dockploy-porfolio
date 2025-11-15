import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import './index.css'
import CookieBanner from './components/CookieBanner/CookieBanner';
import { ConsentProvider } from './context/ConsentContext';



const Home = lazy(() => import("@pages/home/Home.jsx"));
const About = lazy(() => import("@pages/about/About"));
const Proyects = lazy(() => import("@pages/proyects/Proyects"));
const LoadingScreen = lazy(() => import("@pages/loading-screen/LoadingScreen.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: < Home />,

  },
  {
    path: "/about",
    element: <About />,

  },
  {
    path: "/home",
    element: <Home />,

  },
  {
    path: "/proyects",
    element: <Proyects />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  },
  {

    path: "/porfolio",
    element: <Navigate to="/porfolio/" replace />
  },

], {
  basename: '/porfolio/'
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <HelmetProvider>
        <ConsentProvider>
          <RouterProvider router={router} />
          <CookieBanner />
        </ConsentProvider>
      </HelmetProvider>
    </Suspense>
  </StrictMode>
)

