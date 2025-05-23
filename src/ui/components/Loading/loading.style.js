import styled from "styled-components";

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed; 
  top: 0;
  left: 0; 
  width: 100vw;
  height: 100vh; 
  background: rgba(0, 0, 0, 0.8); 
  z-index: 9999; 
`;


export const Spinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid ${({ theme }) => theme.colors.lightGreen};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
