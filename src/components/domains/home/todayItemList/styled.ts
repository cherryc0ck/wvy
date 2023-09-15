import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";

export const Section = styled.section`
  ${({ theme }) => css`
    margin: 50px 0 40px 0;
  `};
`;

export const Date = styled.time`
  ${({ theme }) => css`
    display: block;
    margin-bottom: 30px;
    padding: 0 20px;
    ${theme.typo.head.sm};
    color: ${theme.colors.black};
  `};
`;

export const CustomSwiper = styled(Swiper)`
  ${({ theme }) => css`
    width: 100%;
    ${theme.flex.row("flex-start")};
    padding: 0 20px;

    .swiper-slide,
    .swiper-wrapper {
      width: 180px;
      height: auto;
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    width: 180px;
    height: 243px;
    margin-bottom: 10px;
  `};
`;

export const Figcaption = styled.figcaption`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    background-color: ${theme.colors.mainBlack};
    padding: 4px 10px 3px 10px;
    span {
      color: ${theme.colors.white};
      ${theme.typo.caption.md};
    }
  `};
`;

export const ItemDesc = styled.div`
  ${({ theme }) => css`
    margin-bottom: 20px;
    h3 {
      margin-bottom: 4px;
      ${theme.typo.body.md};
      color: ${theme.colors.black};
    }
    span {
      ${theme.typo.body.sm};
      color: ${theme.colors.gray600};
    }
  `};
`;

export const ThemeTags = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    gap: 8px;
  `};
`;
