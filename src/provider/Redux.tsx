import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import reduxStore from "../modules/redux/store";

type Props = {
  children: ReactNode;
};
function ReduxProvider({ children }: Props) {
  return <Provider store={reduxStore}>{children}</Provider>;
}

export default ReduxProvider;
