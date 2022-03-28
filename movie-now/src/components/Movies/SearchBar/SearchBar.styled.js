import styled from "styled-components";

export const SearchContainer = styled.div`
  background: #484848;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

export const SearchContent = styled.div`
  width: 1400px;
  max-width: 100%;
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 40px;
  padding: 0 20px;
`;

export const SearchBarTextField = styled.input`
  padding: 1rem;
  background: #fff;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  border: none;
  width: 100%;
  border-radius: 40px;

  :focus {
    outline: none;
  }
`;
