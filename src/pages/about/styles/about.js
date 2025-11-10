import styled from "styled-components";
import { devices } from "../../../styles/mixin_styledComponent";
import { Link } from "react-router-dom";

export const ContainerAbout = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
`;
export const BoxAbout = styled.div`
  width: 100%;
  max-width: 900px;
  
`;

export const ButtonBack = styled.button`
  border: none;
  background-color: transparent;
  color:#009d5c;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const AboutCardMe = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 58px;
  gap: 3rem;

  @media only screen and (${devices.xs}) {
     flex-direction: column;
  }
  @media only screen and (${devices.md}) {
    flex-direction: row;
  }
`;

export const CardMeRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const CardMeLeft = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;
`;

export const TitleAbout = styled.h1`
  font-family: "DM Sans", sans-serif;
 
  font-style: normal;
  font-weight: 700;
  line-height: 71px;
  text-align: center;
  margin: 0rem;
  @media only screen and (${devices.xs}) {
     font-size: 40px;
  }
  @media only screen and (${devices.md}) {
    font-size: 60px;
  }
`;

export const TextAbout = styled.p`
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  padding-top: 20px;
`;

export const TextLink=styled(Link)`
  text-decoration: none;
  color:#47d16e; 

`

