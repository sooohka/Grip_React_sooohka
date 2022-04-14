import React, { ReactNode } from "react";
import S from "./Style";

type Props = {
  variant?: "outlined" | "contained";
  children: ReactNode;
};

function Button(props: Props) {
  const { variant, children } = props;
  if (variant === "outlined") {
    return <S.OutLinedButton>{children}</S.OutLinedButton>;
  }
  return <S.ContainedButton>{children}</S.ContainedButton>;
}

export default Button;
