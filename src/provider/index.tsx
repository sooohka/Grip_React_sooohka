import React from "react";
import ReduxProvider from "./Redux";
import Style from "./Style";

type Props = {
  children: JSX.Element;
};

function AppProvider({ children }: Props) {
  return (
    <ReduxProvider>
      <Style>{children}</Style>
    </ReduxProvider>
  );
}

export default AppProvider;
