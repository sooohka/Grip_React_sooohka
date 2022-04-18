import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 0; 
    background: transparent;
  }
  *,*::after,*::before{
    box-sizing: border-box;
  }
  html {
    height: 100%;
    font-size: 62.5%;
  }
  body {
    display: flex;
    height: 100%;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: 1.4rem;
    overflow: hidden;
  };

  #root {
    flex: 1;
  }

  #modal-root{
 }
`;

export default GlobalStyle;
