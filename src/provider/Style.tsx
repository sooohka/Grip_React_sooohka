import React, { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

type Props = {
  children: JSX.Element;
};

function Style({ children }: Props): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default Style;
