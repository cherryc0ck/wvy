import styled, { css } from "styled-components";

export const Footer = styled.footer`
  ${({ theme }) => css`
    border-top: 4px solid ${theme.colors.mainBlack};
    background-color: ${theme.colors.white};
    padding: 20px 20px;
  `};
`;

export const List = styled.ul`
  ${({ theme }) => css`
    li {
      padding: 5px 0;
    }

    li a,
    li button span {
      ${theme.typo.body.md};
      color: ${theme.colors.gray600};
    }

    li button {
      ${theme.flex.row("flex-start")};
      gap: 4px;

      svg {
        width: 16px;
        height: 16px;
        stroke: ${theme.colors.gray600};
      }
    }
  `};
`;

export const ContactList = styled.ul`
  ${({ theme }) => css`
    li {
      padding: 4px 0;
    }
    li a {
      ${theme.typo.body.sm};
      color: ${theme.colors.gray600};
    }
  `};
`;
