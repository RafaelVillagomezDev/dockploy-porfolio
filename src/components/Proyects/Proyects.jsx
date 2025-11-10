import { CardProyect, ProyectContainer, ProyectTitle } from "./styles/Proyects";
import { LinkSkills, ButtonTitle } from "../Skills/styles/Skils";
import React, { lazy } from "react";
import { proyects } from "../../proyects";
import { FaArrowRight } from "react-icons/fa";
function Proyects() {
  return (
    <>
      <ProyectContainer>
        <ProyectTitle>Proyectos</ProyectTitle>
        {proyects.map((card) => {
          return (
            <CardProyect
              key={card.id}
              alt={card.description}
              $img={card.thumbnail}
            ></CardProyect>
          );
        })}
      </ProyectContainer>
      <LinkSkills aria-label="Ir a proyectos" to="/proyects" key="more_proyects">
        <ButtonTitle >
          Ver más proyectos <FaArrowRight />
        </ButtonTitle>
      </LinkSkills>
    </>
  );
}

export default Proyects;
