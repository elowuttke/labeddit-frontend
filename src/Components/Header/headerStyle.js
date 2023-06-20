//import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #ededed;
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
`;

export const CentralLogo = styled.img`
  height: 47;
  grid-column: 2;
`;

export const LogoutButton = styled.button`
  padding: 2px;
  width: 63px;
  height: 25px;
  border: none;
  font-family: "Noto Sans", sans-serif;
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
  color: #4088cb;
  grid-column: 3;
  cursor: pointer;
  //z-index: 10;
`;

export const EntrarButton = styled.button`
  padding: 2px;
  width: 63px;
  height: 25px;
  border: none;
  font-family: "Noto Sans", sans-serif;
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
  color: #4088cb;
  grid-column: 3;
  cursor: pointer;
  //z-index: 10;
`;

export const XButton = styled.button`
  padding: 2px;
  width: 25px;
  height: 25px;
  //border-radius: 8px;
  font-family: "Noto Sans", sans-serif;
  font-size: 24px;
  background-color: transparent;
  color: #a3a3a3;
  grid-column: 1;
  cursor: pointer;
`;

// font-family: 'IBM Plex Sans', sans-serif;
// font-family: 'Noto Sans', sans-serif;
