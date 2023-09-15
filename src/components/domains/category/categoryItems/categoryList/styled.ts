import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 24px;
    margin-bottom: 20px;
  `};
`;

export const CategoryList = styled.ul`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    gap: 10px;
    padding: 0 20px;
    border-bottom: 1px solid ${theme.colors.gray200};
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
  `};
`;
