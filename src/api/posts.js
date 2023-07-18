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

export const getUserPosts = async (username) => {
  try {
    console.log(username);
    const res = await api.get("/posts");
    const result = res.data.filter((post) => post.username == username);
    return result;
  } catch (error) {
    console.error("Error in getUserPosts:", error);
    throw error;
  }
};

export const getPost = async (id) => {
  const res = await api.get("/posts");
  const post = res.data.filter((post) => post.id == id);
  return post;
};

export const editPost = (req) => {};

export const deletePost = (req) => {};
