export const goToLogin = (navigate) => {
  navigate(`/`);
};

export const goToSignup = (navigate) => {
  navigate(`/signup`);
};

export const goToPost = (navigate) => {
  navigate(`/feed`);
};

export const goToComment = (navigate, postId) => {
  navigate(`/comment/${postId}`);
};
