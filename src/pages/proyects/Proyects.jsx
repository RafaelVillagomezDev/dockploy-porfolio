import React, { lazy } from "react";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet-async";
import { ContainerProyects } from "./styles/proyects";

function About() {
  return (
    <>
      <Helmet>
      <title>Yandry | Proyectos</title>
      <meta name="description" content="Soy Yandry, desarrollador web con experiencia en APIs, React, Node.js, PHP, Python, SQL, MySQL, y Docker. Creo aplicaciones frontend escalables y gestiono bases de datos robustas. Conoce mis proyectos y habilidades en yandrydev.es." />
      <meta name="keywords" content="desarrollador web, APIs, React, Node.js, PHP, Python, SQL, MySQL, Docker, frontend, desarrollo web, bases de datos, aplicaciones escalables, desarrollo moderno, Yandry" />
      <link rel="canonical" href="https://yandrydev.cloud/porfolio" />
      <link rel="icon" href="https://yandrydev.cloud/porfolio/favicon.ico" />
      <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <ContainerProyects>
        <h1>Próximamente ..</h1>
      </ContainerProyects>
    </>
  );
}

export default About;
