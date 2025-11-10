import {styled, keyframes } from "styled-components";
import { devices } from "../../../styles/mixin_styledComponent";
import { Link } from "react-router-dom";

export const ButtonContactMobile = styled.div`
  display: flex;
  padding: 16px 35px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #009d5c;
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px;
  max-width: 120px;
  margin: auto;
  cursor: pointer;
`;

export const BtnTitle=styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: whitesmoke;
  font-weight: bold;
  cursor: pointer;
  font-family:"Poppins",sans-serif;
  @media only screen and (${devices.xs}) {
    display: none;
  }
  @media only screen and (${devices.sm}) {
    display: block;
  }
  
`

/*Menu Hamburguer*/

export const BtnBurguer=styled.button`
   width:100%;
   background-color: transparent;
   border: none;
   height: 30px;
   cursor: pointer;
  @media only screen and (${devices.xs}) {
    display:block;
    height: 30px;
  }

 

`
// Define keyframes for the animation
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;
/*Menu Burguer*/
export const MenuBurguer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  top: 0;
  left: ${({ $isclicked }) => ($isclicked ? '0' : '-100%')};
  position: fixed;
  height: 100%;
  background-color: #171718;
  z-index: 2;
  padding: 15px;
  transition: left 0.5s ease;
  animation: ${({ $isclicked }) => ($isclicked ? slideIn : slideOut)} 0.5s ease forwards;
  @media only screen and (${devices.xs}) {
    width: 50%;
  }
  @media only screen and (${devices.sm}) {
     width:25%;
  }

  @media only screen and (${devices.lg}) {
     width:18%;
  }
 
`;
export const HeaderMenuBurguer = styled.div`
  width: 100%;
  height: 75px;
`;
export const BtnCloseMenu = styled.button`
  float: right;
  background-color: transparent;
  border: none;
  height: 30px;
  cursor: pointer;
`;

export const ContainerList = styled.div`
  column-gap: 0.2rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const ListMenu = styled.ul`
   height: 75%;
`;

export const List = styled.li`
  line-height: 2rem;
  margin-bottom: 1rem;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkList = styled(Link)`
  text-decoration: none;
  color: #FFF;
  font-weight: bold;
  font-family: "Poppins",sans-serif;
  display: flex;
  gap: 0.3rem;
  align-items: center;
  align-content: center;
  &:hover {
     border-bottom: 2px solid #47d16e;
  }

  @media only screen and (${devices.xs}) {
    font-size:18px;
    
  }
  @media only screen and (${devices.sm}) {
     font-size: 22px;
  }
`;

export const ListLink=styled.div`
   background-color: rebeccapurple;
   width: 100%;
   height: 100%;

`
export const ContainerLink=styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   align-content: center;
   column-gap: 1rem;
`

export const LinkPersonalized = styled(Link)`
  text-decoration: none;
  color: white;
  width: 28px;
  height: 28px;
  
  content: url(${(props) => props.contenturl});
  &:hover {
    color: red;
  }
`;

