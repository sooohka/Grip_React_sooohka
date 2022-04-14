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
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 7px;
`;

const XCircleIcon = styled(HiXCircleIcon)`
  color: ${({ theme }) => theme.colors.gray[400]};
  width: 1.4rem;
  height: 1.4rem;
`;

const Button = styled.button`
  all: unset;
  width: 1.4rem;
  height: 1.4rem;
  cursor: pointer;
`;

const S = {
  Container,
  Input,
  SearchIcon,
  Button,
  XCircleIcon,
};
export default S;
