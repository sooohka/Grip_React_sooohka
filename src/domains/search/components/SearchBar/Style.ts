import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 40rem;
  height: 7rem;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 10;
`;

const Block = styled.div`
  width: 40rem;
  height: 7rem;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
`;

const S = {
  Container,
  Block,
  Form,
};

export default S;
