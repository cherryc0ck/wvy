import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    padding: 70px 20px 50px 20px;

    ${theme.media.desktop} {
      ${theme.flex.col("center", "flex-start")};
      /* ${theme.flex.row("center", "flex-start")};
      gap: 90px; */
      padding: 100px 16px 100px 24px;
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.desktop} {
      ${theme.flex.row("center", "flex-start")};
      gap: 90px;
    }
  `};
`;
