import api from "./axios";

export const writePost = (req) => {};

export const getPosts = (req) => {
  const res = api.get("/posts");
  return res;
};

export const getUserPosts = (req) => {};

export const getPost = (req) => {};

export const editPost = (req) => {};

export const deletePost = (req) => {};
