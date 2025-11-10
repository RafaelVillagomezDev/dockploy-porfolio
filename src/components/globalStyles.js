import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'PP Neue Montreal', sans-serif;
    transition: all 0.50s linear;
    border-color: ${({ theme }) => theme.border};
  }
  `
