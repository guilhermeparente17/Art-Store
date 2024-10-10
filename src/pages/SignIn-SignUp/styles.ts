import styled, { keyframes } from "styled-components";
import Background from "../../assets/images/fundo-login.jpg";

type StyleProps = {
  typePage?: string;
  marginTop?: string;
  hidden?: boolean;
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
    content: "";
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

  @media screen and (max-width: 1500px) {
    width: 90%;
    height: fit-content;
    padding: 20px 0px;
  }
`;

const signInAnimation = keyframes`
  0% { transform: translateX(0px); } 
  100% { transform: translateX(100%); }   
`;

const signUpAnimation = keyframes`
  0% { transform: translateX(0px); } 
  100% { transform: translateX(-100%); } 
`;

const signInTitleAnimation = keyframes`
  0% { transform: translateX(-50px);
        color: transparent; } 
  100% { transform: translateX(0px);
        color: #fff;
  }   
`;

const ItemAnimation = keyframes`
  0% { transform: translateX(-50px); } 
  100% { transform: translateX(0px); }   
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

  @media screen and (max-width: 1500px) {
    display: none;
  }
`;

export const SignInForm = styled.div<StyleProps>`
  width: 100%;
  height: 95%;
  background-color: none;
  display: ${({typePage}) => (typePage === "signUp" ? "flex" : "block")};;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0px 40px;
  border-radius: 50px;

  z-index: 10;

  @media screen and (max-width: 1500px) {
    display: ${({hidden}) => hidden ? 'none' : "flex"};
  }
`;

export const SignUpForm = styled.div<StyleProps>`
  width: 100%;
  height: 95%;
  background-color: none;
  display: ${({typePage}) => (typePage === "signUp" ? "flex" : "block")};;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  border-radius: 50px;

  margin: 0px 20px;

  @media screen and (max-width: 1500px) {
    display: ${({hidden}) => hidden ? 'none' : "flex"};
  }

`;

export const SignSignUp = styled.div<StyleProps>`
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

  @media screen and (max-width: 1500px) {
    align-items: center;
    position: block;
  }
`;

export const SignInTitle = styled.h1<StyleProps>`
  font-size: 45px;
  color: #fff;

  animation-name: ${({ typePage }) =>
    typePage === "signIn" ? signInTitleAnimation : "none"};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media screen and (max-width: 1500px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ItemForm = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  animation-name: ${({ typePage }) =>
    typePage === 'signIn' ? signInTitleAnimation : "none"};
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @media screen and (max-width: 1500px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ItemLabel = styled.label`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const ItemButton = styled.div<StyleProps>`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  animation-name: ${({ typePage }) =>
    typePage === "signIn" ? signInTitleAnimation : "none"};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

export const ForgotPassword = styled.span<StyleProps>`
  text-decoration: underline;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  animation-name: ${({ typePage }) =>
    typePage === "signIn" ? signInTitleAnimation : "none"};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

export const ItemFooter = styled.div<StyleProps>`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({marginTop}) => marginTop ? marginTop : '50px'};

  animation-name: ${({ typePage }) =>
    typePage === "signIn" ? ItemAnimation : "none"};
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @media screen and (max-width: 1500px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ItemSpan = styled.span`
  font-size: 16px;
  color: #fff;
  font-weight: bold;

  @media screen and (max-width: 1500px) {
    font-size: 12px;
    margin-right: 20px;
  }
`;

export const Logo = styled.h1`
  color: #fff;
  font-weight: bold;
`;