import React from "react";
import {
  Container,
  Form,
  Input,
  LoginButton,
  LogoPrincipal,
  SignupButton,
  SubTitle,
} from "./loginPageStyle";
import logoLabEddit from "../../assents/LogoLabEddit.png";
import { useForm } from "../../hooks/useForm";
import { goToSignup } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { form, onChangeForm, resetForm } = useForm({
    email: "",
    password: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.log(form);
    resetForm();
  };

  return (
    <Container>
      <LogoPrincipal src={logoLabEddit} />
      <SubTitle>O Projeto de rede social da Labenu</SubTitle>
      <Form onSubmit={submitForm}>
        <Input
          id="email"
          name="email"
          placeholder="E-mail"
          type="email"
          value={form.email}
          onChange={onChangeForm}
          required
        />
        <Input
          id="password"
          name="password"
          placeholder="Senha"
          type="password"
          value={form.password}
          onChange={onChangeForm}
          required
        />
        <LoginButton type="submit">Continuar</LoginButton>
      </Form>
      <SignupButton onClick={() => goToSignup(navigate)}>
        Crie uma conta!
      </SignupButton>
    </Container>
  );
};
