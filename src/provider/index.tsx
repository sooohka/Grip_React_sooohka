import React from "react";
import ReduxProvider from "./Redux";
import Router from "./Router";
import Style from "./Style";

type Props = {
  children: JSX.Element;
};

function AppProvider({ children }: Props) {
  return (
    <Router>
      <ReduxProvider>
        <Style>{children}</Style>
      </ReduxProvider>
    </Router>
  );
}

export default AppProvider;
