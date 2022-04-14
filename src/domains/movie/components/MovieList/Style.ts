import styled from "styled-components";

const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.6rem;
  height: 100vh;
  overflow-y: scroll;
`;

const NoMovieBox = styled.div`
  height: 100vh;
  padding-top: 10rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[400]};
  font-weight: bold;
`;

const S = {
  MovieList,
  NoMovieBox,
};

export default S;
