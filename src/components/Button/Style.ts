import styled from "styled-components";

const Button = styled.button`
  color: ${({ theme }) => theme.colors.black};
  border: 0;
  outline: 0;
  padding: 0.5rem 1rem;
  cursor: pointer;
  :focus-visible {
    /*fire-fox */
    outline: blue auto 2px;
    outline: -webkit-focus-ring-color auto 1px;
  }
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
