import {styled,keyframes }from "styled-components";
import { devices } from "../../../styles/mixin_styledComponent";


export const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  border-radius: 15px;
  border: solid 2px floralwhite;
`;

export const CardImage = styled.div`
  grid-area: image;
  background-image: url(${props =>(props.background)});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  padding: 25px;
  background-color: black;
`;

export const CardTextDate = styled.span`
  color: rgb(255, 7, 110);
  font-size: 16px;
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background: linear-gradient(
    110.78deg,
    rgb(118, 230, 80) -1.13%,
    rgb(249, 214, 73) 15.22%,
    rgb(240, 142, 53) 32.09%,
    rgb(236, 81, 87) 48.96%,
    rgb(255, 24, 189) 67.94%,
    rgb(26, 75, 255) 85.34%,
    rgb(98, 216, 249) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const CardTextBody = styled.p`
  color: grey;
  margin-top: 1em;
  font-size: 15px;
  font-weight: 300;
  text-align: start;
  color: white;
`;

export const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #4b538b;
`;

export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
`;

// Definir la animación keyframe
const agrandar = keyframes`
  0% { font-size: 18px; }
  0% { font-size: 20px; }
  100% { font-size: 24px; }
`;

export const LinkText = styled.a`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  transition: font-size 0.2s;
  font-weight: bold;
 
  &:hover {
    color: orange;
    animation: ${agrandar} 1s infinite alternate;
  }
  /* @media only screen and (${devices.xs}) {
    font-size: 15px;
  }
  @media only screen and (${devices.sm}) {
    font-size: 18px;
  } */
`;




export const SpanLink=styled.span`
  padding-right: 1rem;
`