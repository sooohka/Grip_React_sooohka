import React from "react";
import Button from "../../../../components/Button";
import SearchInput from "../SearchInput";
import S from "./Style";

function SearchBar() {
  return (
    <>
      <S.Container>
        <SearchInput />
        <Button variant="outlined">검색</Button>
      </S.Container>
      <S.Block />
    </>
  );
}

export default SearchBar;
