import styled from "styled-components";

const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.6rem;
  height: ${({ theme }) => theme.size.app.height};
  padding-bottom: 10rem;
  overflow-y: scroll;
  padding-top: ${({ theme }) => theme.size.header.height};
`;

const FeedBack = styled.div`
  height: ${({ theme }) => theme.size.app.height};
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
