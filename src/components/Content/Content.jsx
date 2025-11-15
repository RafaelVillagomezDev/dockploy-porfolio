import React, { lazy } from "react";
import { FaFileDownload } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";
import {
  ButtonTitle,
  ContentMain,
  Portada,
  PortadaButton,
  PortadaContainer,
  PortadaContent,
  PortadaTitle,
  BoxSkill,
  PortadaBox,
  ContainerBtn,
  CvButton,
  PortadaTitleName,
} from "./styles/Content";


import cv from "@public/assets/pdf/cv_yandry_villagomez_2024.pdf";
import CardAbout from "@components/CardAbout/CardAbout";
import Skills from "@components/Skills/Skills";
import Proyects from "@components/Proyects/Proyects";
import { pushToDataLayer } from "../../utils/dataLayerHelper";



function Content() {
  const SkillsData = [
    {
      name: "JAVA",
    },
    {
      name: "CSS",
    },
    {
      name: "JS",
    },
    {
      name: "MYSQL",
    },
    {
      name: "PHP",
    },
    {
      name: "REACT",
    },
    {
      name: "NODE",
    },
  ];

  const elemSkill = SkillsData.map((element) => {
    return <BoxSkill key={element.name}>{element.name}</BoxSkill>;
  });

  const download_cv=()=>{
    pushToDataLayer({
        'event': 'cv_download_click', 
        'document_type': 'CV',      
        'user_status': 'logged_in' // Parámetro de contexto
    });
  }



  return (
    <>
      <ContentMain>
        <Portada>
          <PortadaContainer>
            <PortadaBox>
              <PortadaTitle>
                Soy <PortadaTitleName>Yandry Villa</PortadaTitleName>
              </PortadaTitle>
              <PortadaTitle>Desarrollador Web</PortadaTitle>
              <PortadaContent>
                Un desarrollador web que construye el Front-end y Back-end de sitios y aplicaciones
                web que conducen al éxito.
              </PortadaContent>
              <ContainerBtn>
                <PortadaButton aria-label="Ir a proyectos"  to={"/proyects"}>
                  <ButtonTitle>Proyectos<BsLaptop /></ButtonTitle>
                </PortadaButton>
                <CvButton
                  onClick={download_cv}
                  href={cv}
                  target="_blank"
                  rel="cv"
                  download="cv_yandry_rafael_villagomez.pdf"
                  aria-label="Descargar curriculum."
                >
                  <ButtonTitle>
                    CV <FaFileDownload />
                  </ButtonTitle>
                </CvButton>
              </ContainerBtn>
            </PortadaBox>
          </PortadaContainer>
        </Portada>
        <CardAbout />
        <Skills />
        <Proyects />
      </ContentMain>
    </>
  );
}

export default Content;
