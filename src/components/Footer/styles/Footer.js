import styled from "styled-components";
import { devices } from "../../../styles/mixin_styledComponent";
import { Link } from "react-router-dom";
export const FooterComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  background-color: #131414;
  margin-top: 124px;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 2rem;
  align-items: center;
`;

export const FooterTitleNav = styled.h3`
  color: #47d16e;
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight:500;
  line-height: 20px;
  letter-spacing: 0.15px;

`;

export const LinkNavAbout = styled.div`
  display: flex;
  column-gap: 12px;
`

export const FooterText = styled(Link)`
  color: #fff;
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
  text-decoration: none;
 
  &:hover{
    border-bottom: solid 2px #47d16e;
  }
`;
export const FooterTitle = styled.p`
  color: #fff;
  font-family:"Poppins",sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 133.333% */
`;

export const LinkTel = styled.a`
  color: white;
  text-decoration: none;
`;

export const FooterContainer = styled.div`
  display: flex;
  color: black;
  gap: 12px;
  
  @media only screen and (${devices.xs}) {
    flex-direction: column;
    justify-content: center;
    padding: 32px 62px;
  }
  @media only screen and (${devices.sm}) {
    flex-direction: row;
    justify-content: space-around;
    padding: 64px 142px 32px 150px;
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 12px;
`;

export const LinkPersonalized = styled(Link).withConfig({
  // Excluye 'contentUrl' del DOM.
  shouldForwardProp: (prop) => prop !== 'contentUrl',
})`
  text-decoration: none;
  color: white;
 display: inline-block; /* Crucial para aplicar las dimensiones */
 
 height:20px;
  content: url(${(props) => props.contentUrl});
  &:hover {
    color: red;
  }
`;
