import React from "react";
import Button from "../../../../components/Button";
import useSearchForm from "../../hooks/useSearchForm";
import SearchInput from "../SearchInput";
import S from "./Style";

type Props = {
  query: string;
};

function SearchBar({ query }: Props) {
  const { handleInputChange, handleSubmit, input, clearInput } =
    useSearchForm(query);
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
