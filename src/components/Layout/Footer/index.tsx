import React, { forwardRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sessionStorageApi from "../../../utils/sessionstorageApi";
import S from "./Style";

type Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
  "ref"
>;

const Footer = forwardRef<HTMLElement, Props>((props, ref) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(sessionStorageApi.getState("search-query"));
  }, []);

  return (
    <S.Container {...props} ref={ref}>
      <S.ButtonContainer>
        <Link
          to={query ? `/search?s=${query}` : "/search"}
          aria-label="navigate to search"
        >
          <S.IconButton tabIndex={-1}>
            <S.SearchIcon />
          </S.IconButton>
        </Link>
        <S.ButtonLabel>Search</S.ButtonLabel>
      </S.ButtonContainer>
      <S.ButtonContainer>
        <Link to="/favorites" aria-label="navigate to favorites">
          <S.IconButton tabIndex={-1}>
            <S.HeartIcon />
          </S.IconButton>
        </Link>
        <S.ButtonLabel>Favorites</S.ButtonLabel>
      </S.ButtonContainer>
    </S.Container>
  );
});

export default Footer;
