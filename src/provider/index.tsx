import React, { StrictMode } from "react";
import Style from "./Style";

type Props = {
  children: JSX.Element;
};

function AppProvider({ children }: Props) {
  return (
    <StrictMode>
      <Style>{children}</Style>
    </StrictMode>
  );
}

export default AppProvider;
