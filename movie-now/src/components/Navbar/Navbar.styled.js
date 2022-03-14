import styled from "styled-components";

export const StyledNavHeader = styled.nav`
  width: 100%;
  background: ${({ theme }) => theme.colors.content1};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const StyledNavContent = styled.nav`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled.h2``;

export const StyledLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLinkItems = styled.li`
  list-style: none;
  margin: 0 0.5rem;
`;
