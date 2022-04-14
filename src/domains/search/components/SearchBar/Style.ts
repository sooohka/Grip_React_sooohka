import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 1rem 0 1rem 1rem;
`;

const S = {
  Container,
};

export default S;
