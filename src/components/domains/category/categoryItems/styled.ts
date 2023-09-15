import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    margin: 50px 0 50px 0;
    /* padding: 0 20px; */
  `};
`;

export const InputStyles = css`
  ${({ theme }) => css`
    margin: 0 20px;
  `};
`;
