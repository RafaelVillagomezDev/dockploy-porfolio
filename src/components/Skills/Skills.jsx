import React from "react";
import responsive from "../../../public/assets/icons/responsive_icon.webp";
import {
  ButtonTitle,
  CardSkill,
  CardText,
  CardTitle,
  CarrousellSkills,
  ContainerSkills,
  LinkSkills,
  SkillTitle,
} from "./styles/Skils";
import { FaArrowRight } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { cardSkills } from "./Card/cardSkills";
import { languageSkills } from "./Card/languageSkills";


function Skills() {
  return (
    <>
    <ContainerSkills>
      <SkillTitle>Mis habilidades</SkillTitle>
      <CarrousellSkills>
        {cardSkills.map((card) => {
          return (
            <CardSkill  key={card.id}> 
              <LazyLoadImage key={card.id} src={card.thumbnail} alt={card.title}/>
              <CardTitle>{card.title}</CardTitle>
              <CardText>
               {card.text}
              </CardText>
            </CardSkill>
          );
        })}
      </CarrousellSkills>
      <LinkSkills  aria-label="Ir a acerca de mí"  key="more_skills" to="/about" >
        <ButtonTitle>
          Ver más skills <FaArrowRight />
        </ButtonTitle>
      </LinkSkills>
    </ContainerSkills>
    <ContainerSkills>
      <SkillTitle>Mis Lenguajes</SkillTitle>
      <CarrousellSkills>
        {languageSkills.map((card) => {
          return (
            <CardSkill  key={card.id}> 
              <LazyLoadImage key={card.id} src={card.thumbnail} />
              <CardTitle>{card.title}</CardTitle>
              <CardText>
               {card.text}
              </CardText>
            </CardSkill>
          );
        })}
      </CarrousellSkills>
      <LinkSkills  aria-label="Ir a acerca de mí"  key="more_skills" to="/about">
        <ButtonTitle>
          Ver más lenguajes <FaArrowRight />
        </ButtonTitle>
      </LinkSkills>
    </ContainerSkills>
    </>
  );
}
export default Skills;
