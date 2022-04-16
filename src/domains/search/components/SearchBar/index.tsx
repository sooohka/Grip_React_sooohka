import React from "react";
import Button from "../../../../components/Button";
import useSearch from "../../hooks/useSearch";
import SearchInput from "../SearchInput";
import S from "./Style";

function SearchBar() {
  const { handleInputChange, handleSubmit, input, clearInput } = useSearch();
  return (
    <>
      <S.Container>
        <S.Form onSubmit={handleSubmit}>
          <SearchInput
            inputValue={input}
            handleXCircleButtonClick={clearInput}
            handleInputChange={handleInputChange}
          />
          <Button type="submit" variant="outlined">
            검색
          </Button>
        </S.Form>
      </S.Container>
      <S.Block />
    </>
  );
}

export default SearchBar;
