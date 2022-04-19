import styled from "styled-components";
import Heart from "@heroicons/react/solid/HeartIcon";
import Search from "@heroicons/react/solid/SearchIcon";

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${({ theme }) => theme.size.app.width};
  height: ${({ theme }) => theme.size.footer.height};
  background-color: ${({ theme }) => theme.colors.gray[800]};
  color: ${({ theme }) => theme.colors.gray[300]};
  display: flex;
  justify-content: space-around;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconButton = styled.button`
  all: unset;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 50%;
  position: relative;
  transition: transform 1s ease-out;

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  :focus-visible {
    /*fire-fox */
    outline: 2px auto blue;
    outline: 2px auto -webkit-focus-ring-color;
  }
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    top: 0;
    left: 0;
    transform: scale(0.2);
    opacity: 0;
    background-color: rgba(255, 255, 255, 0.2);
    transition: transform 0.2s ease-out;
  }

  :active {
    ::after {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const HeartIcon = styled(Heart)``;
const SearchIcon = styled(Search)``;

const ButtonLabel = styled.span``;

const S = {
  Container,
  HeartIcon,
  SearchIcon,
  ButtonContainer,
  ButtonLabel,
  IconButton,
};

export default S;
