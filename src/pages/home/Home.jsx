import { Suspense, lazy } from "react";
import LoadingScreen from "../loading-screen/LoadingScreen";
import { Helmet } from 'react-helmet-async';

const Header = lazy(() => import("@components/Header/Header"));
const Content = lazy(() => import("@components/Content/Content"));
const Footer = lazy(() => import("@components/Footer/Footer"));

function Home() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Helmet>
    <title>Yandry | Home</title>
    

    <meta name="description" content="Explora mi porfolio Yandry, un ingeniero de software especializado en desarrollo web y Fullstack. Descubre mis proyectos y habilidades en yandrydev.cloud." />
    
    <meta name="keywords" content="ingeniero de software, desarrollador web,Python, JavaScript, Node , Express, PHP..." />

    {/* Etiquetas Open Graph (¡CRUCIALES!) */}
    <meta property="og:title" content="Yandry | Desarrollador Fullstack" />
    <meta property="og:description" content="Explora mi porfolio Yandry, un ingeniero de software especializado en desarrollo web..." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yandrydev.cloud/home" />
    <meta property="og:image" content="https://yandrydev.cloud/porfolio/dist/favicon.ico" /> 
    <link rel="canonical" href="https://yandrydev.cloud/home" />
</Helmet>
      <Header />
      <Content />
      <Footer />
    </Suspense>
  );
}

export default Home;
