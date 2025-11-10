import { styled } from "styled-components";
import { devices } from "../../../styles/mixin_styledComponent";
import { Link } from "react-router-dom";

export const CardAboutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CardAboutBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
  border-radius: 8px;
  border: 1.5px solid #3d3d3d;
  background: #1f1f21;
  padding: 1rem;
  @media only screen and (${devices.xs}) {
    flex-direction: column;
    max-width: 967px;
    height: 100%;
    align-items: center;
  }
  @media only screen and (${devices.sm}) {
    flex-direction: row;
  }
`;

export const CardAboutLeft = styled.div`
  display: flex;
  @media only screen and (${devices.xs}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (${devices.sm}) {
    flex-direction: row;
  }
`;

export const CardAboutRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

export const CardAboutTitle = styled.p`
  color: #47d16e;
  font-family: "DM Sans", sans-serif;
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
`;

export const CardAboutText = styled.p`
  color: #fff;
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
  letter-spacing: 0.44px;
`;

export const CardButton = styled(Link)`
  display: flex;
  padding: 16px 20px;
  max-width: 205px;
  justify-content: center;
  align-items: center;
  border: 2px solid #3d3d3d;
  border-radius: 8px;
  background-color: transparent;
  color: #FAFAFA;
  text-decoration: none;
`;
