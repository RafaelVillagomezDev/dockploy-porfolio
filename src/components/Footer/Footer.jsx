import React from "react";
import {
  FooterColumn,
  FooterComponent,
  FooterContainer,
  FooterText,
  FooterTitle,
  FooterTitleNav,
  LinkContainer,
  LinkNavAbout,
  LinkPersonalized,
  LinkTel,
} from "./styles/Footer";
import gmail from "../../../public/assets/icons/gmail.webp";
import linkdn from "../../../public/assets/icons/linkedin.webp";
import whatsapp from "../../../public/assets/icons/whatsapp.webp";

function Footer() {
  const LinkData = [
    {
      id: 1,
      enlace: "mailto:yandry75@gmail.com?Subject=Oferta%20de%20trabajo%20",
      contentUrl: gmail,
      label:"Ir a email"
    },
    {
      id: 2,
      enlace: "https://www.linkedin.com/in/rafaelvillagomez/",
      contentUrl: linkdn,
      label:"Ir a linkdln"
    },
    {
      id: 3,
      enlace:
        "https://wa.me/618152241?text=Hola%20Yandry%20me%20gustaria%20hablar%20de%20trabajo%20",
      contentUrl: whatsapp,
      label:"Ir a whatsapp"
    },
  ];

  const elemLinkNav = LinkData.map((element) => {
    return (
      <LinkPersonalized
        to={element.enlace}
        key={element.id}
        contentUrl={element.contentUrl}
        target="_blank"
        aria-label={element.label}
      >
        {element.contentUrl}
      </LinkPersonalized>
    );
  });

  return (
    <>
      <FooterComponent>
        <FooterContainer>
          <FooterColumn>
            <FooterTitle>YandryDev</FooterTitle>
          </FooterColumn>
          <FooterColumn>
            <FooterTitleNav>Inicio</FooterTitleNav>
            <FooterText  aria-label="Ir a acerca de mí" target="_blank" to="/about">
              Acerca de mí
            </FooterText>
            <FooterText  aria-label="Ir a proyectos" target="_blank" to="/proyects">
              Proyectos
            </FooterText>
          </FooterColumn>
          <FooterColumn>
            <FooterTitleNav>Contáctame</FooterTitleNav>
            <FooterText
              aria-label="Abrir email"
              target="_blank"
              to="mailto:yandry75@gmail.com?Subject=Oferta%20de%20trabajo%20"
            >
              Correo
            </FooterText>
            <FooterText
              aria-label="Abrir linkdln"
              target="_blank"
              to="https://www.linkedin.com/in/rafaelvillagomez/"
            >
              Linkdln
            </FooterText>
          </FooterColumn>
          <FooterColumn>
            <FooterTitleNav>Social</FooterTitleNav>
            <LinkNavAbout>{elemLinkNav}</LinkNavAbout>
          </FooterColumn>
        </FooterContainer>
      </FooterComponent>
    </>
  );
}

export default Footer;
