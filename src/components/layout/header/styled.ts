import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    ${theme.flex.row("space-between", "center")};
    width: 100%;
    padding: 16px 20px;

    background-color: ${theme.colors.white};

    h1 {
      width: 18px;
      height: 24px;
      svg {
        width: 100%;
        height: 100%;
      }
    }

    ${theme.media.tablet} {
      padding: 32px 24px;
      h1 {
        width: 45px;
        height: 60px;
      }
    }
  `};
`;

export const MobileNav = styled.nav`
  ${({ theme }) => css`
    display: block;
    position: absolute;
    top: 64px;
    left: 0;
    z-index: ${theme.zIndex.modal};
    width: 100%;
    background-color: ${theme.colors.white};

    ul {
      ${theme.flex.col()};
      width: 100%;
    }

    ul li {
      width: 100%;
      border-bottom: 1px solid ${theme.colors.gray300};
    }

    ul li a {
      display: block;
      width: 100%;
      padding: 20px 0;
      ${theme.typo.body.lg};
      color: ${theme.colors.mainBlack};
      text-align: center;
    }

    ${theme.media.tablet} {
      display: none;
    }
  `};
`;

export const DesktopNav = styled.nav`
  ${({ theme }) => css`
    display: none;

    ${theme.media.tablet} {
      display: block;
      ul {
        ${theme.flex.row()};
        gap: 111.5px;
      }

      ul li a {
        ${theme.typo.body.md};
        color: ${theme.colors.black};
      }
    }
  `};
`;

export const MenuButton = styled.button`
  ${({ theme }) => css`
    ${theme.flex.row()};
    svg {
      width: 32px;
      height: 32px;
      stroke: ${theme.colors.black};
    }

    ${theme.media.tablet} {
      display: none;
    }
  `};
`;
