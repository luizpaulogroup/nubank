import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }

`;

export const ContentSpinner = styled.div`
    position: absolute;
    z-index: 999;
    top: 25px;
    left: 48%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    animation: ${rotate} 2s linear infinite;
`;
