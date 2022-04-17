import styled from "styled-components";

const AppContainer = styled.main`
  position: relative;
  margin: 0 auto;
  width: ${({ theme }) => theme.size.app.width};
  background: black;
`;

export default AppContainer;
