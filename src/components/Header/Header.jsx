import React, { useState } from "react";

import {
  ContainerElement,
  HeaderContainer,
  Label,
  Switch,
  Input,
  LinkPersonalized,
  NavPersonalized,
  ButtonContact,
} from "./styles/header";

import { BtnBurguer } from "../MenuBurguer/styles/menu"
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globalStyles";
import { lightTheme, darkTheme } from "../Theme";
import gmail from "@public/assets/icons/gmail.webp";
import linkdn from "@public/assets/icons/linkedin.webp";
import whatsapp from "@public/assets/icons/whatsapp.webp";
import MenuBurguers from "@components/MenuBurguer/MenuBurguer";
import { BtnTitle } from "../MenuBurguer/styles/menu";
import { FaBars } from "react-icons/fa6";
import Form from "@components/Portals/Form";

function Header() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [checked, setChecked] = useState(false);
  const [isclicked, setIsClicked] = useState(false);
  const [openPortal, setOpenPortal] = useState(false);

  const handleclose = () => {
    // 1. Calcula el NUEVO valor booleano.
    const nuevoEstado = !isclicked;

    // 2. Ejecuta el setter para actualizar el estado (asíncrono).
    setIsClicked(nuevoEstado);

    // 3. Devuelve el NUEVO valor calculado.
    return nuevoEstado;
  };

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  const LinkData = [
    {
      id: "inicio",
      name: "Inicio",
      enlace: "/home",
      label: "Ir a home",
      contentUrl: gmail,
    },
    {
      id: "acerca",
      name: "Acerca de mi",
      enlace: "/about",
      label: "Ir a about",
      contentUrl: linkdn,
    },
    {
      id: "proyectos",
      name: "Proyectos",
      enlace:
        "/about",
      label: "Ir a proyectos",
      contentUrl: whatsapp,
    },
  ];



  const elemLink = LinkData.map((element) => {
    return (
      <LinkPersonalized aria-label={element.label} to={element.enlace} key={element.id} contentUrl={element.contentUrl}>
        {element.name}
      </LinkPersonalized>
    );
  });

  const openPortalForm = () => {
    setOpenPortal(!openPortal);
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <HeaderContainer>
        <ContainerElement>
          <BtnBurguer onClick={handleclose} aria-label="Abrir menu">
            <FaBars style={{ color: "#FFF" }} size={"18px"} />
          </BtnBurguer>
        </ContainerElement>

        <NavPersonalized>{elemLink}</NavPersonalized>
        <ContainerElement>
        </ContainerElement>
        <ContainerElement>
          <Label htmlFor="checkbox-mode_dark">
            <Input
              aria-label="Cambios modo oscuro"
              id="checkbox-mode_dark"
              checked={checked}
              onClick={themeToggler}
              type="checkbox"
              onChange={handleChange}
            />
            <Switch />
          </Label>
          <ButtonContact onClick={openPortalForm} aria-label="Abre modal contacto">Contactame</ButtonContact>
        </ContainerElement>
      </HeaderContainer>
      <MenuBurguers isclicked={isclicked} handleclose={handleclose} openPortalForm={openPortalForm} />
      <Form openPortal={openPortal} openPortalForm={openPortalForm} />
    </ThemeProvider>
  );
}

export default Header;
