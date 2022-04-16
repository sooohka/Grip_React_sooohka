import React, { forwardRef } from "react";
import S from "./Style";

type Button = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const XCircleButton = forwardRef<HTMLButtonElement, Button>((props, ref) => (
  <S.Button {...props} ref={ref}>
    <S.XCircleIcon />
  </S.Button>
));

export default XCircleButton;
