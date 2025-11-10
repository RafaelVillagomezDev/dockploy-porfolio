import React, { useState } from "react";
import { BsLaptop } from "react-icons/bs";
import { FaFingerprint } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";

import {
  MenuBurguer,
  HeaderMenuBurguer,
  BtnCloseMenu,
  ContainerList,
  List,
  LinkList,
  ListMenu,
  LinkPersonalized,
  ContainerLink,
  ButtonContactMobile,
} from "./styles/menu";

import gmail from "@public/assets/icons/gmail.webp";
import linkdn from "@public/assets/icons/linkedin.webp";
import whatsapp from "@public/assets/icons/whatsapp.webp";



function MenuBurguers(props) {


  
  const LinkData = [
    {
      id: "home",
      enlace: "/home",
      name: "Inicio",
      icon: <IoHomeOutline />,
    },
    {
      id: "about",
      enlace: "/about",
      name: "Acerca de mí",
      icon: <FaFingerprint />,
    },
    {
      id: "proyects",
      enlace: "/proyects",
      name: "Proyectos",
      icon: <BsLaptop />,
    },
  ];

 
 
  const ElemLink = LinkData.map((element) => {
    return (
      <List key={element.id}>
        <LinkList to={element.enlace}  >
          {element.name} {element.icon}
        </LinkList>
      </List>
    );
  });

  const LinkDataFooter = [
    {
      id: "gmail",
      enlace: "mailto:yandry75@gmail.com?Subject=Oferta%20de%20trabajo%20",
      contenturl: gmail,
      label:"Ir a gmail"
    },
    {
      id: "linkdn",
      enlace: "https://www.linkedin.com/in/rafaelvillagomez/",
      contenturl: linkdn,
      label:"Ir a linkdln"
    },
    {
      id: "whatsapp",
      enlace:
        "https://wa.me/618152241?text=Hola%20Yandry%20me%20gustaria%20hablar%20de%20trabajo%20",
      contenturl: whatsapp,
      label:"Ir a whatsapp"
    },
  ];

  const elemLinkFooter = LinkDataFooter.map((element) => {
    return (
      <LinkPersonalized
        to={element.enlace}
        key={element.id}
        contenturl={element.contenturl}
        aria-label={element.label}
      >
        {element.contentUrl}
      </LinkPersonalized>
    );
  });

  return (
    <>
      <MenuBurguer $isclicked={props.isclicked}>
        <HeaderMenuBurguer>
          <BtnCloseMenu  aria-label="Cierra menu contacto" onClick={props.handleclose ? props.handleclose  : undefined}>
            <FaX style={{ color: "#FFF" }} size={"18px"} />
          </BtnCloseMenu>
        </HeaderMenuBurguer>
        <ContainerList>
          <ListMenu>{ElemLink}</ListMenu>
        </ContainerList>
        <ContainerList>
            <ButtonContactMobile  aria-label="Abrir menu modal contacto" onClick={props.openPortalForm}>Contáctame</ButtonContactMobile>
        </ContainerList>
        <ContainerList>
            <ContainerLink>{elemLinkFooter}</ContainerLink>
        </ContainerList>
      </MenuBurguer>
    </>
  );
}

export default MenuBurguers;
