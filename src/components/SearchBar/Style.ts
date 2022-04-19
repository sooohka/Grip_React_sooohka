import styled from "styled-components";

const Container = styled.header`
  width: ${({ theme }) => theme.size.app.width};
  height: ${({ theme }) => theme.size.header.height};
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: ${({ theme }) => theme.zIndex.header};
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
`;

const S = {
  Container,
  Form,
};

export default S;
