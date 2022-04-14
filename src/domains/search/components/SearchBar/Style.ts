import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: flex;
  width: 40rem;
  height: 7rem;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Block = styled.div`
  width: 40rem;
  height: 7rem;
`;

const S = {
  Container,
  Block,
};

export default S;
