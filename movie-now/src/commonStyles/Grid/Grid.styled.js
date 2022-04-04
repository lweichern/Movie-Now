import styled from "styled-components";

export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.content2};
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template: auto auto / repeat(4, 1fr);
  grid-gap: 2rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: grid;
    grid-template: auto auto / repeat(2, 1fr);
    grid-gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: grid;
    grid-template: auto auto / repeat(1, 1fr);
    grid-gap: 2rem;
  }
`;
