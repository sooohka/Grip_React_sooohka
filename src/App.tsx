import React from "react";
import styled from "styled-components";

const S = styled.div(({ theme }) => ({
  background: theme.colors.primary,
}));

function App() {
  return <S>hi</S>;
}

export default App;
