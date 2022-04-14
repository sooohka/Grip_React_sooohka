import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: flex;
  width: 40rem;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.black};
`;

const S = {
  Container,
};

export default S;
