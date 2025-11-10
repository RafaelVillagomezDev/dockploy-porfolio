import styled from "styled-components";
import { devices } from "../../../styles/mixin_styledComponent";
import portadaImg from "../../../../public/assets/img/portada.jpg";
import { Link } from "react-router-dom";

export const Portada = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media only screen and (${devices.xs}) {
    height: 500px;
  }
  @media only screen and (${devices.sm}) {
    height: 680px;
  }
`;

export const ContentMain = styled.div`
  height: 100%;
  margin: 2rem;
`;

export const PortadaContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6rem;

  @media only screen and (${devices.xs}) {
    width: 100%;
  }
`;

export const PortadaBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

export const PortadaImg = styled.div`
  background-image: url(${portadaImg});
  width: 100%;
  height: 500px;
  min-height: 500px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 120px 360px;

  @media only screen and (${devices.xs}) {
    display: none;
  }
  @media only screen and (${devices.sm}) {
    display: block;
  }
`;

export const PortadaImgMobile = styled.img`
  background-image: url(${portadaImg});
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 1rem;
  @media only screen and (${devices.xs}) {
    display: block;
  }
  @media only screen and (${devices.sm}) {
    display: none;
  }
`;

export const PortadaTitleName = styled.span`
  color: #47d16e;
`;
export const PortadaTitle = styled.p`
  text-align: center;
  font-family: "DM Sans";
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 71px; /* 118.333% */
  letter-spacing: -0.5px;
  @media only screen and (${devices.xs}) {
    font-size: 35px;
  }
  @media only screen and (${devices.sm}) {
    font-size: 65px;
    font-weight: bold;
  }
  @media only screen and (${devices.lg}) {
    font-size: 67px;
  }
`;
export const PortadaContent = styled.p`
  text-align: center;
  max-width: 446px;
  width: 100%;
  height: 117px;
  font-family: "DM Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  letter-spacing: 0.15px;
  display: flex;
  align-items: center;
`;

export const PortadaButton = styled(Link)`
  background-color: #009d5c;
  border-width: 2px;
  border-color: white;
  border-radius: 1em;
  margin-top: 1rem;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 100% */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: ce;
  @media only screen and (${devices.xs}) {
    padding: 1.25em 1.5rem;
  }
  @media only screen and (${devices.sm}) {
    padding: 1.25em 5em;
  }
`;

export const CvButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: transparent;
  border: solid 2px #3d3d3d;
  border-width: 2px;
  border-radius: 1em;
  margin-top: 1rem;
  text-decoration: none;
  color: #009d5c;
  @media only screen and (${devices.xs}) {
    padding: 1.25em 2rem;
  }
  @media only screen and (${devices.sm}) {
    padding: 1.25em 5em;
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const ButtonTitle = styled.span`
  font-size: 15px;
  font-weight: bold;
  display: flex;
  column-gap: 0.5rem;
`;
export const SectionAbout = styled.div`
  display: flex;
  gap: 2rem;

  @media only screen and (${devices.xs}) {
    flex-direction: column;
    padding: 0rem;
  }
  @media only screen and (${devices.sm}) {
    flex-direction: row;
    padding: 2rem 2rem;
  }
`;
export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AboutSkills = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (${devices.xs}) {
    padding: 2rem 0rem;
  }
  @media only screen and (${devices.sm}) {
    padding: 2rem 2rem;
  }
`;

export const CommonTitle = styled.h1`
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 1.5rem;
  @media only screen and (${devices.sm}) {
    font-size: 30px;
  }
`;

export const CommonTitleV1 = styled.h1`
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 1rem;

  @media only screen and (${devices.xs}) {
    font-size: 25px;
    text-align: start;
  }

  @media only screen and (${devices.sm}) {
    font-size: 30px;
    text-align: center;
  }
`;

export const CommonContent = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 2rem;

  @media only screen and (${devices.xs}) {
    font-size: 18px;
  }
  @media only screen and (${devices.sm}) {
    font-size: 18px;
    text-align: center;
    text-align: center;
    word-break: keep-all;
  }
`;

export const ContentSkill = styled.div`
  flex-wrap: wrap;
  display: flex;
  padding-top: 1rem;

  @media only screen and (${devices.xs}) {
    gap: 1rem;
  }
  @media only screen and (${devices.sm}) {
    gap: 2rem;
  }
`;

export const BoxSkill = styled.div`
  border-radius: 2px;
  text-align: center;
  padding: 1rem 1rem;
  border-radius: 360px;
  gap: 1rem;
  background-color: orange;
  font-weight: 600;
  color: white;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: auto;
  padding-top: 1.5rem;
  @media only screen and (${devices.md}) {
    flex-direction: column;
  }
`;
