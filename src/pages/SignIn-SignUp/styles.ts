import styled, { keyframes } from "styled-components";
import Background from '../../assets/images/fundo-login.jpg';

type StyleProps = {
  typePage?: string;
};

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  background: url(${Background}) no-repeat center center;
  background-position: center;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }
`;

export const Login = styled.div`
  width: 60%;
  height: 80%;
  background-color: rgba(225, 225, 225, 0.1);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  border-radius: 20px;
  border: 3px solid #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
`;

const signInAnimation = keyframes`
  0% { transform: translateX(0px); } 
  100% { transform: translateX(100%); }   
`;

const signUpAnimation = keyframes`
  0% { transform: translateX(0px); } 
  100% { transform: translateX(-100%); } 
`;

export const BackgroundImg = styled.img<StyleProps>`
  width: 50%;
  height: 95%;
  position: absolute;
  z-index: 19;
  border-radius: 50px;
  background-position: center;
  background-size: contain;
  right: ${({ typePage }) => (typePage === "signIn" ? "none" : "0")};
  left: ${({ typePage }) => (typePage === "signIn" ? "0" : "none")};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);

  animation-name: ${({ typePage }) =>
    typePage === "signIn" ? signInAnimation : signUpAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

export const SignInForm = styled.div<StyleProps>`
  width: 100%;
  height: 95%;
  background-color: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0px 40px;
  border-radius: 50px;

  z-index: 10;
`;

export const SignUpForm = styled.div<StyleProps>`
  width: 100%;
  height: 95%;
  background-color: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  border-radius: 50px;

  margin: 0px 20px;
`;

export const SignSignUp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 20px;
  position: relative;
`;

export const SignInContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  gap: 40px;
`;

export const SignInTitle = styled.h1`
  font-size: 45px;
  color: #fff;
`;

export const ItemContainer = styled.div`
  display:flex;
  gap: 20px;
  flex-direction: column;
`;

export const ItemForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ItemLabel = styled.label`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const ItemButton = styled.div`
  width: 100%;
  height: 30px;
  display:flex;
  justify-content: flex-end;
  align-items: flex-end;
  
`;

export const ForgotPassword = styled.span`
  text-decoration: underline;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

export const ItemFooter = styled.div`
  width: 100%;
  height: 30px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

export const ItemSpan = styled.span`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;


