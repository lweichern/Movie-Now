import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #3d3d3d;
  padding: 2rem 0;
  margin-top: 3rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  & > * {
    color: #fff;
    font-size: 2.5rem;
    cursor: pointer;
    padding: 0.4rem;
    border-radius: 50%;
  }

  & > *:hover {
    background: #4d4d4d;
  }
`;

export const FooterLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;
  color: #fff;
  margin-top: 2rem;
  cursor: pointer;
  flex-wrap: wrap;

  & > li {
    list-style: none;
    padding: 0.5rem;
    border: 1px solid transparent;
  }

  & > li:hover {
    text-decoration: underline;
  }

  & > li:active {
    border: 1px dotted #fff;
  }
`;

export const FooterTitle = styled.h3`
  color: #fff;
  text-align: center;
  margin-top: 2rem;
`;

export const Copyright = styled.p`
  color: #fff;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 2rem;
`;
