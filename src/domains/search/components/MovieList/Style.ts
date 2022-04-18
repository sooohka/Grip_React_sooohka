import styled from "styled-components";

const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.6rem;
  height: 100vh;
  padding-bottom: 10rem;
  overflow-y: scroll;
  padding-top: ${({ theme }) => theme.size.header.height};
`;

const FeedBack = styled.div`
  height: 100vh;
  padding-top: 10rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[400]};
  font-weight: bold;
`;

const S = {
  MovieList,
  FeedBack,
};

export default S;
