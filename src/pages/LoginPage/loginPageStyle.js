import styled from "styled-components";

export const Container = styled.div`
  background-color: yellow;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoPrincipal = styled.img`
  width: 40vw;
  padding: 10px;
`;

export const SubTitle = styled.div`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 21px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80vw;
  gap: 10px;
  padding: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
`;

export const LoginButton = styled.button`
  width: 80vw;
  background-color: orange;
  padding: 8px;
  cursor: pointer;
`;

export const SignupButton = styled.button`
  width: 80vw;
  background-color: white;
  padding: 8px;
  cursor: pointer;
`;
