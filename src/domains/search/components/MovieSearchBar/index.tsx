import React from "react";
import SearchBar from "../../../../components/SearchBar";

type Props = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

function MovieSearchBar(props: Props) {
  const { handleSubmit, input, setInput } = props;
  return (
    <SearchBar
      ariaFormLabel="search movie"
      handleSubmit={handleSubmit}
      input={input}
      setInput={setInput}
    />
  );
}

export default MovieSearchBar;
