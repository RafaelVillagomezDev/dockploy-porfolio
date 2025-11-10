import styled from "styled-components";
import { devices } from "../../../styles/mixin_styledComponent";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  font-size: 1.5em;
  text-align: center;
  background-color: #171718;
  backdrop-filter: blur(40px);
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  position: sticky;

  top: 0;
`;

export const ContainerElement = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const NavPersonalized = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1.75rem;
  @media only screen and (${devices.xs}) {
    gap: 0.75rem;
  }
  @media only screen and (${devices.sm}) {
    gap: 1.75rem;
  }
`;

export const LinkPersonalized = styled(Link).withConfig({
  // Excluye 'contentUrl' del DOM.
  shouldForwardProp: (prop) => prop !== 'contentUrl',
})`
  font-family: "DM Sans", sans-serif;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  content:url(${(props) => props.contentUrl});
  height:22px;

  @media only screen and (${devices.xs}) {
    display: none;
  }
  @media only screen and (${devices.sm}) {
    display: block;
  }
  &:hover {
    border-bottom: solid 3px #47d16e;
  }
`;

/*Button contact */

export const ButtonContact = styled.div`
  display: flex;
  padding: 16px 35px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #009d5c;
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px;
  @media only screen and (${devices.xs}) {
    display: none;
  }
  @media only screen and (${devices.sm}) {
    display: block;
  }
`;

/*Toggle */

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: black;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "🌝";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: white;

    &:before {
      transform: translate(32px, -50%);
      content: "🌚";
   
    }
  }
`;
