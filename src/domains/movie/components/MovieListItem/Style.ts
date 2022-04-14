import styled from "styled-components";

const Container = styled.li`
  display: flex;
  gap: 2rem;
  height: 12rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  :hover {
    opacity: 0.5;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Img = styled.img`
  height: 12rem;
  width: 12rem;
  object-fit: fill;
`;

const InfoBox = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;

const Title = styled.h6``;

const Category = styled.strong``;

const S = { Container, InfoBox, Img, Title, Category };

export default S;
