import React from "react";
import {
  AboutContainer,
  AboutTitle,
  BoxAbout,
  CardAbout,
  ContainerStar,
  TextCardAbout,
  TitleCardAbout,
} from "./styles/CardAboutPage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { contentSkills } from "./Card/content";
import { languageSkills } from "./Card/language_content";
import { bdContent} from "./Card/bd_content";
import star  from "../../../public/assets/icons/about/star.webp";


function CardAboutPage() {

  const Star=()=>{
      const elementos = [];
      for (let i = 1; i <= 5; i++) {
        elementos.push(<LazyLoadImage key={i}  width={"20px"}  src={star} alt={"start"} />)
      }

      return elementos
  }
  
  return (
    <AboutContainer>
      <AboutTitle>Mis Habilidades</AboutTitle>
      <BoxAbout>
        {contentSkills.map((card,key) => {
          return (
            <CardAbout key={key}>
              <LazyLoadImage width={"30px"} key={card.id} src={card.thumbnail} alt={card.title} />
              <TitleCardAbout>{card.title}</TitleCardAbout>
              <TextCardAbout>{card.text}</TextCardAbout>
            </CardAbout>
          );
        })}
      </BoxAbout>
      <AboutTitle>Lenguajes y librerias </AboutTitle>
      <BoxAbout>
        {languageSkills.map((card,key) => {
          return (
            <CardAbout key={key}>
              <LazyLoadImage width={"30px"} key={card.id} src={card.thumbnail} alt={card.title} />
              <TitleCardAbout>{card.title}</TitleCardAbout>
              <TextCardAbout>{card.text}</TextCardAbout>
              <ContainerStar>
                 <Star/>
              </ContainerStar>
            </CardAbout>
          );
        })}
      </BoxAbout>
      <AboutTitle>Bases de Datos</AboutTitle>
      <BoxAbout>
        {bdContent.map((card,key) => {
          return (
            <CardAbout key={key}>
              <LazyLoadImage width={"30px"} key={card.id} src={card.thumbnail} alt={card.title} />
              <TitleCardAbout>{card.title}</TitleCardAbout>
              <TextCardAbout>{card.text}</TextCardAbout>
              <ContainerStar>
                 <Star/>
              </ContainerStar>
            </CardAbout>
          );
        })}
      </BoxAbout>
    </AboutContainer>
  );
}

export default CardAboutPage;
