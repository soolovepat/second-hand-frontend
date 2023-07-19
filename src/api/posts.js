import api from "./axios";

export const writePost = async (formData) => {
  console.log(formData);
  const res = await api.post("/post", formData);
  console.log(res);
  return res;
};

export const getPosts = async () => {
  const res = await api.get("/posts");
  console.log(res);
  return res;
};

export const getUserPosts = async (username) => {
  const res = await api.get(`/posts/${username}`);
  return res;
};

export const getPost = async (id) => {
  const res = await api.get(`/posts/${id}`);
  return res;
};

export const editPost = async (id) => {
  const res = await api.put(`/posts/${id}`);
  return res;
};
export const deletePost = async (id) => {
  const res = await api.post(`/posts/${id}`);
  return res;
};
