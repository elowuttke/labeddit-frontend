import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { SignupPage } from "../pages/SignupPage/SignupPage";
import { PostPage } from "../pages/PostPage/PostPage";
import { CommentPage } from "../pages/CommentPage/CommentPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="feed" element={<PostPage />} />
        <Route path="comment/:postId" element={<CommentPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
