import { styled, keyframes } from "styled-components";
import { devices } from "../../../styles/mixin_styledComponent";

export const AboutContainer = styled.div`
  width: 100%;
`;

export const AboutTitle = styled.h3`
  font-family: "DM Sans", sans-serif;
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 117.647% */
  letter-spacing: 0.25px;
  color: #47d16e;

  text-align: center;
  @media only screen and (${devices.xs}) {
    padding: 32px;
  }
  @media only screen and (${devices.sm}) {
    padding: 128px 0px;
  }
`;

export const BoxAbout = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  @media only screen and (${devices.xs}) {
    align-items: center;
    flex-direction: column;
    margin: 3rem;
  }
  @media only screen and (${devices.sm}) {
    flex-wrap: wrap;
    flex-direction: row;
    margin: 2rem;
  }
`;

export const CardAbout = styled.div`
  display: flex;
  padding: 24px;
  gap: 15px;
  width: 100%;
  border-radius: 8px;
  background-color: #1f1f21;
  max-width: 329px;
  flex-direction: column;
  justify-content: space-around;
  @media only screen and (${devices.xs}) {
    width: 100%;
    
  }
  @media only screen and (${devices.sm}) {
    flex: 1 1 30%;
    height:225px;

  }
`;

export const TitleCardAbout = styled.h3`
  color: #fff;
  font-family: "DM Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.25px;
`;

export const TextCardAbout = styled.p`
  color: #fff;
  font-family: "DM Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
`;

export const ContainerStar=styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

`