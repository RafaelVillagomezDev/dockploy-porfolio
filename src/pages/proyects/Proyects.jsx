import React, { lazy } from "react";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet-async";
import { ContainerProyects } from "./styles/proyects";

function About() {
  return (
    <>
      <Helmet>

        <title>Yandry | Proyectos de Desarrollo Web y Fullstack</title>
        <meta
          name="description"
          content="Explora mi portafolio de proyectos de desarrollo web Fullstack. Experiencia en React, Node.js, Python, APIs y gestión de bases de datos escalables (SQL, MySQL, Docker). ¡Descubre mis soluciones técnicas!"
        />
        <meta
          name="keywords"
          content="proyectos de desarrollo web, portafolio Fullstack, proyectos React, proyectos Node.js, proyectos Python, APIs, bases de datos MySQL, Docker, aplicaciones escalables, desarrollo moderno"
        />
        <meta property="og:title" content="Portafolio de Proyectos - Yandry Villa (Fullstack Developer)" />
        <meta property="og:description" content="Descubre los proyectos técnicos que he desarrollado, desde aplicaciones frontend escalables con React hasta APIs robustas con Node.js y Python." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yandrydev.cloud/porfolio/proyectos" />
        <meta property="og:image" content="https://yandrydev.cloud/images/projects-social-share.jpg" />
        <meta property="og:locale" content="es_ES" />

        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://yandrydev.cloud/porfolio/proyectos" />
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
