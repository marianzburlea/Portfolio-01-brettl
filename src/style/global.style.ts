import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    font-size: 16px;
    color: #333;
    background-color: red;
    margin: 0;
    padding: 0;
  }
`;
