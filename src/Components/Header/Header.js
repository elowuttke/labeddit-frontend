import React from "react";
import labenuLogo from "../../assents/Logo.png";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToPost } from "../../routes/coordinator";
import { useLocation } from "react-router-dom";
import {
  CentralLogo,
  Container,
  EntrarButton,
  LogoutButton,
  XButton,
} from "./headerStyle";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      {location.pathname.includes(`/comment/`) ? (
        <XButton onClick={() => goToPost(navigate)}>X</XButton>
      ) : (
        ""
      )}
      <CentralLogo src={labenuLogo} />
      {location.pathname === `/signup` ? (
        <EntrarButton onClick={() => goToLogin(navigate)}>Entrar</EntrarButton>
      ) : (
        <LogoutButton onClick={() => goToLogin(navigate)}>Logout</LogoutButton>
      )}
    </Container>
  );
};
