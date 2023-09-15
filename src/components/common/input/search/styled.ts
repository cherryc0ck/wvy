import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    position: relative;
    ${theme.flex.row("space-between")};
    height: 48px;
    padding: 0 14px;
    border: 1px solid ${theme.colors.gray400};
    border-radius: 4px;
  `};
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    max-width: 220px;
    ${theme.typo.body.sm};
  `};
`;

export const Label = styled.label`
  ${({ theme }) => css`
    display: none;
  `};
`;

export const Button = styled.button`
  ${({ theme }) => css`
    ${theme.flex.row()};

    width: 28px;
    height: 28px;

    svg {
      width: 28px;
      height: 28px;
      fill: ${theme.colors.gray800};
    }
  `};
`;
