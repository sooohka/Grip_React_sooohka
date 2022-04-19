import styled from "styled-components";

const AppContainer = styled.main`
  position: relative;
  margin: 0 auto;
  width: ${({ theme }) => theme.size.app.width};
  height: ${({ theme }) => theme.size.app.height};
  background: black;
  display: flex;
  flex-direction: column;
`;

export default AppContainer;
