import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 20px;
    margin: 50px 0;
  `};
`;

export const TitleButtonGroup = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    padding: 0 20px;
  `};
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    width: 100px;
    ${theme.typo.head.sm};
    color: ${theme.colors.mainBlack};
  `};
`;

export const SlideButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: none;
  `};
`;

export const CustomSwiper = styled(Swiper)`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    width: 100%;
    padding: 0 20px;

    .swiper-wrapper {
      width: 152px;
      height: auto;
    }

    .swiper-slide {
      ${theme.flex.col("center", "flex-start")};
    }
  `}
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    width: 152px;
    height: 228px;
    margin-bottom: 10px;
  `};
`;

export const Figcaption = styled.figcaption`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    ${theme.flex.row()};
    height: 24px;
    padding: 0 9px;
    background-color: ${theme.colors.mainBlack};
    span {
      color: ${theme.colors.white};
      ${theme.typo.caption.md};
    }
  `};
`;

export const ItemDesc = styled.div`
  ${({ theme }) => css`
    span {
      ${theme.typo.body.md};
      color: ${theme.colors.mainBlack};
    }
    p {
      ${theme.typo.body.sm};
      color: ${theme.colors.mainBlack};
    }
  `};
`;
