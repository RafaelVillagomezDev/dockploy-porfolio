import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { devices } from "../../../styles/mixin_styledComponent";

export const ContainerSkills = styled.div`
  width: 100%;
  text-align: center;

  @media only screen and (${devices.xs}) {
    padding-top: 156px;
  }
  @media only screen and (${devices.sm}) {
    padding-top: 64px;
  }
`;

export const SkillTitle = styled.p`
  color: #47d16e;
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 166.667% */
  letter-spacing: 0.25px;
  @media only screen and (${devices.xs}) {
    padding-bottom: 95px;
    font-size: 24px;
    letter-spacing: 0.25px;
  }
  @media only screen and (${devices.sm}) {
    padding-bottom: 95px;
    font-size: 35px;
    letter-spacing: 0.25px;
  }
`;

export const CarrousellSkills = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media only screen and (${devices.xs}) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
   
  }
  @media only screen and (${devices.sm}) {
    flex-direction: column;
    align-items: center;
    
  }
  @media only screen and (${devices.lg}) {
    flex-direction: row;
    align-items:start;
    
  }
`;

export const CardSkill = styled.div`
  display: flex;
  padding: 24px;

  max-width: 354px;
  align-items: flex-start;
  gap: 15px;
  border-radius: 8px;
  background-color: #1f1f21;
  @media only screen and (${devices.xs}) {
    flex-direction: column;
    width: 230px;
  }
  @media only screen and (${devices.sm}) {
    flex-direction: column;
    width: 300px;
    height: 305px;
    
  }
  @media only screen and (${devices.lg}) {
    flex-direction: column;
   
    
  }
`;

export const CardImg = styled.img``;

export const CardTitle = styled.h3`
  color: #fff;
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.25px;
  margin: 0;
  @media only screen and (${devices.xs}) {
    font-size: 20px;
  }
  @media only screen and (${devices.sm}) {
    font-size: 20px;
  }
  @media only screen and (${devices.lg}) {
    font-size: 24px;
  }
`;

export const CardText = styled.p`
  color: #fff;
  font-family: "DM Sans", sans-serif;
  text-align: start;

  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
  letter-spacing: 0.44px;
  @media only screen and (${devices.xs}) {
    font-size: 14px;
  }
  @media only screen and (${devices.sm}) {
    font-size: 16px;
  }
`;

export const LinkSkills = styled(Link)`
  height: 48px;
  width: 221px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: auto;
  border-radius: 8px;
  margin-top: 90px;
  background-color: #009d5c;
  text-decoration: none;
`;

export const ButtonTitle = styled.button`
  display: flex;
  gap: 0.5rem;
  color: #fff;
  display: flex;
  font-family: "DM Sans",sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 100% */
  text-decoration: none;
  background-color:transparent;
  border: none;
`;
