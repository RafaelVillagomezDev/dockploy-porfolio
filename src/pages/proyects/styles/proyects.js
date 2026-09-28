import styled from "styled-components";
import { devices } from "../../../styles/mixin_styledComponent";

export const ContainerProyects = styled.div`
  margin: 2rem auto; 
  max-width: 900px; 
  width: 100%; 
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1; 

  @media ${devices.tablet} {
    margin: 4rem auto;
  }
`;