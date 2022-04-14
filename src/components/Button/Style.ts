import styled from "styled-components";

const Button = styled.button`
  color: ${({ theme }) => theme.colors.black};
  border: 0;
  outline: 0;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const OutLinedButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
`;

const ContainedButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
`;

const S = { Button, OutLinedButton, ContainedButton };

export default S;
