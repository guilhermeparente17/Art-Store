import styled, { keyframes } from "styled-components";

type ButtonProps ={
  width?: number;
  height?: number;
  animated?: boolean;
  typePage?: string;
}

const ItemAnimationSignIn = keyframes`
  0% { transform: translateX(-50px); } 
  100% { transform: translateX(0px); }   
`;

const ItemAnimationSignUp = keyframes`
  0% { transform: translateX(50px); } 
  100% { transform: translateX(0px); }   
`;

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

  animation-name: ${({ typePage, animated }) =>
    typePage === "signIn" && animated ? ItemAnimationSignIn : ItemAnimationSignUp};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  
  &:hover {
    background-color: rgba(0,0,0,0.9);
    transition: 0.2s ease-in-out;
  }

  &:active {
    transform: scale(1.1);
  }
`;