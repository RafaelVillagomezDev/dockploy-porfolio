import React, { Suspense, lazy } from "react";
import LoadingScreen from "@pages/loading-screen/LoadingScreen";
import {
  AboutCardMe,
  BoxAbout,
  ButtonBack,
  CardMeLeft,
  CardMeRight,
  ContainerAbout,
  TextAbout,
  TextLink,
  TitleAbout,
} from "./styles/about";
const Header = lazy(() => import("@components/Header/Header"));
const Footer = lazy(() => import("@components/Footer/Footer"));
const CardAboutPage = lazy(() =>import("@components/CardAboutPage/CardAboutPage"));

import { IoArrowBack } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import fondo from "@public/assets/img/fondo.webp";
import { Helmet } from "react-helmet-async";

function About() {
  function historyGoBack() {
    globalThis.history.go(-1);
  }

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Helmet>
        <title>Yandry | Acerca de mí</title>
        <meta
          name="description"
          content="Soy Yandry, un desarrollador web en Madrid, España, apasionado por el trabajo en equipo y la innovación en el desarrollo de productos digitales. Constantemente aprendo y aplico nuevas tendencias para crear aplicaciones útiles."
        />
        <meta
          name="keywords"
          content="desarrollador web, trabajo en equipo, tendencias de desarrollo web, feedback en proyectos, aplicaciones útiles, Madrid, España, innovación en software, Yandry,web, APIs, React, Node.js, PHP, Python, SQL, MySQL, Docker, frontend"
        />
        <link rel="canonical" href="https://yandrydev.cloud/porfolio" />
        <link rel="icon" href="https://yandrydev.cloud/porfolio/favicon.ico" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <ContainerAbout>
        <BoxAbout>
          <ButtonBack aria-label="Volver atras" onClick={historyGoBack}>
            <IoArrowBack /> volver
          </ButtonBack>
          <AboutCardMe>
            <CardMeRight>
              <LazyLoadImage
                alt={"fondo_about"}
                className="image_resize"
                src={fondo}
              />
            </CardMeRight>
            <CardMeLeft>
              <TitleAbout> Yandry Villa</TitleAbout>
              <TextAbout>
                Soy Desarrollador Web y actualmente vivo en Madrid, España. Me
                agrada la idea de trabajar en equipo, pienso que es una manera
                de conectar con nuevas habilidades y de brindar mi conocimiento
                al equipo, con el fin de mejorar la productividad en el
                desarrollo de algún producto digital. Me gusta descubrir cosas
                nuevas a diario y ser un activo valioso en cualquier equipo en
                el que me desarrolle. Por este motivo estoy aprendiendo
                constantemente e investigando acerca de las nuevas tendencias.
                Trato de buscar todo el feedback posible en los proyectos, con
                el fin de mejorar y poder hacer aplicaciones que ayuden a las
                personas.
              </TextAbout>

              <TextAbout>
                ¡Hablemos!
                <TextLink
                  aria-label="Ir a email"
                  to="mailto:yandry75@gmail.com?Subject=Oferta%20de%20trabajo%20"
                  key="mailto_mail"
                >
                  {" "}
                  yandry75@gmail.com{" "}
                </TextLink>
              </TextAbout>
            </CardMeLeft>
          </AboutCardMe>
        </BoxAbout>
      </ContainerAbout>

      <CardAboutPage />
      <Footer />
    </Suspense>
  );
}

export default About;
