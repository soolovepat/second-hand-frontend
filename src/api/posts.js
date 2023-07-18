import api from "./axios";

export const writePost = async (formData) => {
  console.log(formData);
  const res = await api.post("/posts", formData);
  console.log(res);
  return res;
};

export const getPosts = (req) => {
  const res = api.get("/posts");
  return res;
};

export const getUserPosts = (req) => {};

export const getPost = async (id) => {
  const res = await api.get("/posts");
  const post = res.data.filter((post) => post.id == id);
  return post;
};

export const editPost = (req) => {};

export const deletePost = (req) => {};
