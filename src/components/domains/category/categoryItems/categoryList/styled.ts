import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 24px;
    margin-bottom: 20px;

    ${theme.media.desktop} {
      width: 100%;
      margin: 50px 0 0 0;
    }
  `};
`;

export const CategoryList = styled.ul`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    gap: 10px;
    padding: 0 20px;
    border-bottom: 1px solid ${theme.colors.gray200};

    ${theme.media.desktop} {
      ${theme.flex.col("flex-start", "flex-start")};
      gap: 16px;
      padding: 0;
      border-bottom: 0px;
    }
  `};
`;

export const Category = styled.li`
  ${({ theme }) => css`
    &[aria-selected="true"] button {
      color: ${theme.colors.mainBlack};
      border-bottom: 1px solid ${theme.colors.mainBlack};
    }

    button {
      font-size: 13px;
      font-weight: 500;
      line-height: 2.08rem;
      color: ${theme.colors.gray400};
    }

    ${theme.media.desktop} {
      width: 100%;

      &[aria-selected="false"] button {
        border-bottom: 1px solid ${theme.colors.gray200};
      }

      button {
        width: 100%;
        padding-bottom: 18px;
        ${theme.typo.body.lg};
        text-align: left;
        color: ${theme.colors.mainBlack};
      }
    }
  `};
`;

export const CustomSwiper = styled(Swiper)`
  ${({ theme }) => css`
    width: 100%;
    ${theme.flex.row("flex-start")};
    padding: 8px 20px 7px 20px;
    background-color: ${theme.colors.gray50};

    .swiper-slide,
    .swiper-wrapper {
      width: auto;
    }
  `};
`;

export const KeywordButton = styled.button`
  ${({ theme }) => css`
    ${theme.typo.caption.md};

    &[aria-selected="false"] {
      color: ${theme.colors.gray400};
    }

    &[aria-selected="true"] {
      color: ${theme.colors.mainBlack};
      border-bottom: 1px solid ${theme.colors.mainBlack};
    }

    ${theme.media.desktop} {
      ${theme.typo.body.md};

      &[aria-selected="false"] {
        color: ${theme.colors.gray400};
      }

      &[aria-selected="true"] {
        border: 0;
        color: ${theme.colors.mainBlack};
      }
    }
  `};
`;

export const KeywordList = styled.ul`
  ${({ theme }) => css`
    ${theme.flex.col("flex-start", "flex-start")};
    gap: 10px;
    width: 100%;
    padding: 10px;
    background-color: ${theme.colors.gray50};
  `};
`;
