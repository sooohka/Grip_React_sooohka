import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  font-size: 62.5%;
  *,*::after,*::before{
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }
  body {
    display: flex;
    height: 100%;
    flex-direction: column;
  };
  #root {
    flex: 1;
  }
`;

export default GlobalStyle;
