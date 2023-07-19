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
  console.log(postId, editedData);
  const res = await api.put(`/post/${postId}`, editedData);
  console.log(res);
  return res;
};
export const deletePost = async (postId) => {
  const res = await api.post(`/posts/${postId}`);
  return res;
};
