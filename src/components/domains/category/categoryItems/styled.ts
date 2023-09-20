import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    margin: 50px 0 80px 0;

    ${theme.media.desktop} {
      margin: 100px 0;
    }
  `};
`;

export const InputStyles = css`
  ${({ theme }) => css`
    margin: 0 20px;

    ${theme.media.desktop} {
      margin: 0;
      width: 100%;
    }
  `};
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    display: none;

    ${theme.media.desktop} {
      display: block;
      margin-bottom: 50px;
      padding-left: 24px;
      ${theme.typo.head.lg};
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.desktop} {
      ${theme.flex.row("flex-start", "flex-start")};
      gap: 33px;
      padding: 0 24px;
    }
  `};
`;

export const SearchListGroup = styled.div`
  ${({ theme }) => css`
    ${theme.media.desktop} {
      ${theme.flex.col()};
      margin-right: 57px;
    }
  `};
`;
