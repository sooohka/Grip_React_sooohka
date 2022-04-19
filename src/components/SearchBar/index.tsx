import React, { ChangeEvent, useCallback } from "react";
import Button from "../Button";
import SearchInput from "./SearchInput";
import S from "./Style";

type Props = {
  handleSubmit: (e: any) => void;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

function SearchBar(props: Props) {
  const { handleSubmit, input, setInput } = props;

  const clearInput = useCallback(() => {
    setInput("");
  }, [setInput]);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setInput(value);
    },
    [setInput]
  );

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <SearchInput
          inputValue={input}
          handleXCircleButtonClick={clearInput}
          handleInputChange={handleInputChange}
        />
        <Button aria-label="search" type="submit" variant="outlined">
          검색
        </Button>
      </S.Form>
    </S.Container>
  );
}

export default SearchBar;
