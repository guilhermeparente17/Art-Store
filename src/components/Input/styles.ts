import styled from "styled-components";

export const InputContainer = styled.input`
  width: 350px;
  height: 36px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: transparent;
  background-color: rgba(225, 225, 225, 0.1);
  backdrop-filter: blur(15px);
  padding: 0px 10px;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  outline: none;

  @media screen and (max-width: 1500px) {
    width: 100%;
  }
`;