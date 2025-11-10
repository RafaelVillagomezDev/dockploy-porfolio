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
        <meta name="description" content="Esta es la home page" />

        <meta name="description" content="Explora mi porfolio Yandry, un ingeniero de software especializado en desarrollo web, aplicaciones web, diseño responsive, node js , api , endpoint. Descubre mis proyectos y habilidades en yandrydev.es." />
        <meta name="keywords" content="ingeniero de software, desarrollador web,Python, JavaScript, DevOps, seguridad en software, programación moderna, portafolio de software, desarollador front,desdarollador fullstack,desarrollador web, dessarollador back, back,front" />
      </Helmet>
      <Header />
      <Content />
      <Footer />
    </Suspense>
  );
}

export default Home;
