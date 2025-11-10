import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { devices } from "../../../styles/mixin_styledComponent";


export const ErrorMessague=styled.span`
  font-size: 16px;
  color: red;

`

export const ContainerForm = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  display: ${({ openPortal }) => (openPortal ? "flex" : "none")};
`;

/*Button contact */

export const ButtonContact = styled.div`
  display: flex;
  padding: 16px 35px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #009d5c;
  color: #fff;
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

export const BoxPortal = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: #1f1f21;
  border-radius: 8px;
  padding: 1rem;
  @media only screen and (${devices.xs}) {
    height: 100%;
  }
  @media only screen and (${devices.sm}) {
    height: 570px;
  }
`;

export const BtnClosePortal = styled.button`
  float: right;
  background-color: transparent;
  border: none;
  height: 30px;
  cursor: pointer;
`;

export const FormPortal = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BoxInput = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media only screen and (${devices.sm}) {
    padding: 1rem;
  }
`;
export const LabelInput = styled.label`

  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
  letter-spacing: 0.44px;
`;

export const InputPortal = styled.input`
  -webkit-user-select: auto;     /* Permite la selección de texto dentro del input */
  -webkit-touch-callout: default; /* Permite el menú contextual en dispositivos táctiles */
  -webkit-appearance: none;   
  border-radius: 8px;
  border: 1px solid #a0a0a1;
  padding: 16px 20px;
  background: #1f1f21;
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.44px;
  color: white;
`;
export const InputSubmit = styled.input`
  -webkit-user-select: auto;     /* Permite la selección de texto dentro del input */
  -webkit-touch-callout: default; /* Permite el menú contextual en dispositivos táctiles */
  -webkit-appearance: none;   
  text-align: center;
  border-radius: 8px;
  border: none;
  padding: 16px 20px;
  background: #47d16e;
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.44px;
  color: white;
  cursor: pointer;
`;

export const InputArea = styled.textarea`
  -webkit-user-select: auto;     /* Permite la selección de texto dentro del input */
  -webkit-touch-callout: default; /* Permite el menú contextual en dispositivos táctiles */
  -webkit-appearance: none;      /* Elimina el estilo predeterminado del navegador */
  resize: none;
  height: 80px;
  background: #1f1f21;
  border-radius: 8px;
  border: 1px solid #a0a0a1;
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
  letter-spacing: 0.44px;
  color: white;
`;
