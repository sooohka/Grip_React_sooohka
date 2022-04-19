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
    background-color: ${({ theme }) => theme.colors.gray[700]};
    font-size: 1.4rem;
    overflow: hidden;
  };
  a,a:any-link{
    color:inherit;
    text-decoration: none;
    :focus-visible {
    /*fire-fox */
    outline: blue auto 2px;
    outline: -webkit-focus-ring-color auto 1px;
  }
  }

  #root {
    flex: 1;
  }
`;

export default GlobalStyle;
