import styled from "styled-components";
import {
  SearchIcon as HiSearchIcon,
  XCircleIcon as HiXCircleIcon,
} from "@heroicons/react/solid";

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 0.7rem 1rem;
  background-color: ${({ theme }) => theme.colors.gray[900]};
`;

const Input = styled.input`
  all: unset;
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.white};
  background-color: inherit;
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray[600]};
  }
  padding-top: 2px;
`;

const SearchIcon = styled(HiSearchIcon)`
  color: ${({ theme }) => theme.colors.gray[600]};
  width: 2rem;
  height: 2rem;
  margin-right: 7px;
`;

const XCircleIcon = styled(HiXCircleIcon)`
  color: ${({ theme }) => theme.colors.gray[400]};
  width: 2rem;
  height: 2rem;
`;

const Button = styled.button`
  all: unset;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  :focus-visible {
    /*fire-fox */
    outline: blue auto 2px;
    outline: -webkit-focus-ring-color auto 1px;
  }
`;

const S = {
  Container,
  Input,
  SearchIcon,
  Button,
  XCircleIcon,
};
export default S;
