import styled from "styled-components";
import { ReactComponent as SpinnerSvg } from "../../assets/Spinner.svg";

const Spinner = styled(SpinnerSvg)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.7);
`;

const Backdrop = styled.div`
  position: fixed;
  margin: 0 auto;
  width: ${({ theme }) => theme.size.app.width};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.7;
  z-index: 1000;
`;

const S = { Spinner, Backdrop };

export default S;
