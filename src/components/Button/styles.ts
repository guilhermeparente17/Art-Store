import styled from "styled-components";

type ButtonProps ={
  width?: number;
  height?: number;
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "40px")};
  background-color: #000;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  border: 0;
  outline: none;
  backdrop-filter: blur(40px);
  cursor: pointer;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
  
  &:hover {
    background-color: rgba(0,0,0,0.9);
    transition: 0.2s ease-in-out;
  }

  &:active {
    transform: scale(1.1);
  }
`;