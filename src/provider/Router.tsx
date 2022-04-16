import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

type Props = {
  children: ReactElement;
};
function Router({ children }: Props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>{children}</BrowserRouter>
  );
}

export default Router;
