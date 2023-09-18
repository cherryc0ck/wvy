import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";

export const Section = styled.section`
  ${({ theme }) => css`
    margin: 50px 0 63px 0;
  `};
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 30px;
    padding: 0 20px;
    ${theme.typo.head.sm};
    color: ${theme.colors.mainBlack};
  `};
`;

export const CustomSwiper = styled(Swiper)`
  ${({ theme }) => css`
    width: 100%;
    ${theme.flex.row("flex-start")};
    margin-bottom: 20px;
    padding: 0 20px;

    .swiper-wrapper {
      width: 320px;
      height: auto;
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    width: 320px;
    height: 480px;
    margin-bottom: 15px;
  `};
`;

export const ItemDesc = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    h3 {
      margin-bottom: 10px;
      ${theme.typo.body.lg};
      color: ${theme.colors.mainBlack};
    }
  `};
`;

export const ThemeWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    gap: 8px;
  `};
`;
