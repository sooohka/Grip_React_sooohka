import React, { ReactNode } from "react";
import * as RRD from "react-router-dom";

function Link({ children }: { children: ReactNode }) {
  return <RRD.Link to="">{children}</RRD.Link>;
}

export default Link;
