import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { devices } from "../../../styles/mixin_styledComponent";

export const ProyectContainer = styled.div`
  width: 100%;
  
  @media only screen and (${devices.xs}) {
    margin: 80px 0px;
  }
  @media only screen and (${devices.sm}) {
    margin: 176px 0px;
  }
`;

export const ProyectTitle = styled.h3`
  text-align: center;
  color: #47d16e;
  font-family: "DM Sans", sans-serif;
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.25px;
  margin-bottom: 54px;
`;

export const CardProyect = styled.div`
  margin: auto;
  width: 100%;
  flex-shrink: 0;
  max-width: 950px;
  flex-shrink: 0;
  background: url(${(props) => props.$img});
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 5rem;
  border-radius: 20px;
  @media only screen and (${devices.xs}) {
    height: 230px;
  }
  @media only screen and (${devices.sm}) {
    height: 534px;
  }
`;
