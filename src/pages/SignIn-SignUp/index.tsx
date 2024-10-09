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
                <SignInTitle> Sign In</SignInTitle>

                <ItemContainer>
                  <ItemForm>
                    <ItemLabel>Email</ItemLabel>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </ItemForm>

                  <ItemForm>
                    <ItemLabel>Password</ItemLabel>
                    <Input type="password" placeholder="Enter your passwords" />
                  </ItemForm>

                  <ItemButton>
                    <ForgotPassword>Forgot Password</ForgotPassword>
                  </ItemButton>

                  <Button
                    width={126}
                    height={43}
                    text="Login Now"
                    onClick={() => {}}
                  />

                  <ItemFooter>
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
            <SignUpForm typePage={typePage}>
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

                  <ItemFooter>
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
