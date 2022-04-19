import styled, { css } from "styled-components";
import HeartSolid from "@heroicons/react/solid/HeartIcon";
import HeartOutline from "@heroicons/react/outline/HeartIcon";

const Container = styled.li`
  position: relative;
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
  :focus-visible {
    /*fire-fox */
    outline: blue auto 2px;
    outline: -webkit-focus-ring-color auto 1px;
  }
`;

const Img = styled.img`
  min-width: 12rem;
  min-height: 12rem;
  max-height: 12rem;
  max-width: 12rem;
  object-fit: fill;
`;

const InfoBox = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  padding: 1rem 0;
`;

const Icon = css`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.colors.primary.main};
`;

const HeartSolidIcon = styled(HeartSolid)`
  ${Icon}
`;

const HeartOutlineIcon = styled(HeartOutline)`
  ${Icon}
`;

const Title = styled.h6``;

const Category = styled.strong``;

const S = {
  Container,
  InfoBox,
  Img,
  Title,
  Category,
  HeartOutlineIcon,
  HeartSolidIcon,
};

export default S;
