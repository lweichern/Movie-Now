import styled from "styled-components";

export const SpinnerElem = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 5px solid lightgray;
  border-top: 5px solid ${({ theme }) => theme.colors.content1};
  animation: spin 0.8s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
