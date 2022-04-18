import styled from "styled-components";
import XIcon from "@heroicons/react/outline/XIcon";

const Container = styled.dialog`
  width: ${({ theme }) => theme.size.modal.width};
  height: ${({ theme }) => theme.size.modal.height};
  z-index: ${({ theme }) => theme.zIndex.modal};
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-transform: capitalize;
`;

const Title = styled.h3`
  font-size: 1.6rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 1;
`;

const CloseButton = styled.button`
  all: unset;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border: none;
  transform: translate(1rem, -1rem);
  cursor: pointer;
  :hover {
    transform: translate(1rem, -1rem) scale(1.1);
  }
  :focus-visible {
    /*fire-fox */
    outline: blue auto 1px;
    outline: -webkit-focus-ring-color auto 1px;
  }
`;

const CloseIcon = styled(XIcon)`
  width: 2rem;
  height: 2rem;
  stroke-width: 2.5px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.2rem;
  flex: 1;
`;

const Paragraph = styled.p`
  flex: 1;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const Button = styled.button`
  all: unset;
  width: 6rem;
  height: 2.5rem;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 1px 1px 1px 1px rgba(1, 1, 1, 0.1);
  background-color: ${({ theme }) => theme.colors.gray[500]};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  :hover {
    filter: brightness(0.8);
  }
  :focus-visible {
    /*fire-fox */
    outline: blue auto 1px;
    outline: -webkit-focus-ring-color auto 1px;
  }
`;

const LeftButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
`;

const RightButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.gray[800]};
`;

const BackDrop = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: ${({ theme }) => theme.size.app.width};
  height: ${({ theme }) => theme.size.app.height};
  z-index: ${({ theme }) => theme.zIndex.backDrop};
  background-color: rgba(1, 1, 1, 0.8);
`;

const S = {
  Container,
  Header,
  Title,
  CloseButton,
  CloseIcon,
  Content,
  Paragraph,
  ButtonBox,
  LeftButton,
  RightButton,
  BackDrop,
};

export default S;
