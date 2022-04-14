import React, { forwardRef, HTMLAttributes } from "react";
import S from "./Style";

const XCircleButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>((props, ref) => (
  <S.Button ref={ref}>
    <S.XCircleIcon />
  </S.Button>
));

export default XCircleButton;
