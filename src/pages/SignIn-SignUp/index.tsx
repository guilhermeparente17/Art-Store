import {
  BackgroundImg,
  ForgotPassword,
  ItemButton,
  ItemContainer,
  ItemFooter,
  ItemForm,
  ItemLabel,
  ItemSpan,
  Login,
  LoginContainer,
  Logo,
  SignInContainer,
  SignInForm,
  SignInTitle,
  SignSignUp,
  SignUpForm,
} from "./styles";
import Background from "../../assets/images/background.jpg";
import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

const LoginPage = () => {
  const [typePage, setTypePage] = useState<string>("signIn");

  return (
    <LoginContainer>
      <Login>
        <SignSignUp>
          {
            <SignInForm typePage={typePage}>
              <SignInContainer>
              <Logo>Art Store</Logo>
                <SignInTitle typePage={typePage}>Sign In</SignInTitle>

                <ItemContainer>
                  <ItemForm typePage={typePage}>
                    <ItemLabel>Email</ItemLabel>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </ItemForm>

                  <ItemForm typePage={typePage}>
                    <ItemLabel>Password</ItemLabel>
                    <Input type="password" placeholder="Enter your passwords" />
                  </ItemForm>

                  <ItemButton typePage={typePage}>
                    <ForgotPassword>Forgot Password</ForgotPassword>
                  </ItemButton>

                  <ItemFooter marginTop={"0px"} typePage={typePage}>
                    <Button
                      width={126}
                      height={43}
                      text="Login Now"
                      onClick={() => {}}
                      typePage={typePage}
                      animated={typePage === "signUp"}
                    />
                  </ItemFooter>

                  <ItemFooter typePage={typePage}>
                    <ItemSpan>Don't have an account?</ItemSpan>
                    <Button
                      width={150}
                      height={39}
                      text="Create Account"
                      onClick={() => setTypePage("signUp")}
                    />
                  </ItemFooter>
                </ItemContainer>
              </SignInContainer>
            </SignInForm>
          }

          <BackgroundImg
            src={Background}
            alt="background"
            typePage={typePage}
          />

          {
            <SignUpForm>
              <SignInContainer>
                <SignInTitle>Sign Up</SignInTitle>

                <ItemContainer>
                  <ItemForm>
                    <ItemLabel>Name</ItemLabel>
                    <Input type="text" placeholder="Digit your name" />
                  </ItemForm>

                  <ItemForm>
                    <ItemLabel>Email</ItemLabel>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </ItemForm>

                  <ItemForm>
                    <ItemLabel>Password</ItemLabel>
                    <Input type="password" placeholder="Enter your password" />
                  </ItemForm>

                  <ItemForm>
                    <ItemLabel>Repeat Password</ItemLabel>
                    <Input type="password" placeholder="Repeat password" />
                  </ItemForm>

                  <Button
                    width={0}
                    height={43}
                    text="Create Account"
                    onClick={() => {}}
                    
                  />

                  <ItemFooter typePage={typePage}>
                    <ItemSpan>Don't have an account?</ItemSpan>
                    <Button
                      width={150}
                      height={39}
                      text="Login"
                      onClick={() => setTypePage("signIn")}
                      
                    />
                  </ItemFooter>
                </ItemContainer>
              </SignInContainer>
            </SignUpForm>
          }
        </SignSignUp>
      </Login>
    </LoginContainer>
  );
};

export default LoginPage;
