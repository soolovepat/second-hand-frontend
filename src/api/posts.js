import api from "./axios";

export const writePost = async (formData) => {
  const res = await api.post("/post", formData);
  return res;
};

export const getPosts = async () => {
  const res = await api.get("/posts");
  return res;
};

export const getUserPosts = async (username) => {
  const res = await api.get(`/posts/${username}`);
  return res;
};

export const getPost = async (postId) => {
  const res = await api.get(`/post/${postId}`);
  return res;
};

export const editmyPost = async (postId, editedData) => {
  const res = await api.put(`/post/${postId}`, editedData);
  return res;
};

export const toggleSold = async (postId) => {
  console.log(postId);
  const res = await api.put(`/${postId}`);
  return res;
};

export const deletePost = async (postId) => {
  const res = await api.delete(`/post/${postId}`);
  return res;
};
