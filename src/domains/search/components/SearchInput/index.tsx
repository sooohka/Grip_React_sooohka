import React from "react";
import S from "./Style";
import XCircleButton from "./XCircleButton";

type Props = {
  inputValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleXCircleButtonClick: () => void;
};
function SearchInput(props: Props) {
  const { inputValue, handleInputChange, handleXCircleButtonClick } = props;

  return (
    <S.Container>
      <S.SearchIcon />
      <S.Input
        value={inputValue}
        onChange={handleInputChange}
        placeholder="검색"
      />
      <XCircleButton
        aria-label="reset input text"
        type="reset"
        onClick={handleXCircleButtonClick}
        onTouchEnd={handleXCircleButtonClick}
        hidden={Boolean(inputValue) === false}
      />
    </S.Container>
  );
}

export default SearchInput;
