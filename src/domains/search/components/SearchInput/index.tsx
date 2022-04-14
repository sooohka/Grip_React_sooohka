import React from "react";
import S from "./Style";
import XCircleButton from "./XCircleButton";

function SearchInput() {
  return (
    <S.Container>
      <S.SearchIcon />
      <S.Input placeholder="검색" />
      <XCircleButton />
    </S.Container>
  );
}

export default SearchInput;
