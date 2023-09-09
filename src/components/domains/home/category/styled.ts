import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};

    padding: 0 20px;
  `};
`;

export const CategoryListWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 4px;
    width: 100%;
    margin-bottom: 80px;
  `};
`;
