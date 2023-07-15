import api from "./axios";

export const writePost = (req) => {};

export const getPosts = (req) => {
  const res = api.get("/posts");
  return res;
};

export const getUserPosts = (req) => {};

export const getPost = async (postId) => {
  const res = await api.get("/posts");
  console.log(res);
  const post = res.filter((post) => post.postId === postId);
  return post;
};

export const editPost = (req) => {};

export const deletePost = (req) => {};
