import api from "./axios";

export const writeComment = async (formData) => {
  const res = await api.post("/comment", formData);
  console.log(res);
  return res;
};
export const editComment = async (id, content) => {
  const res = await api.put(`/comment/${id}`, content);
  return res;
};
export const deleteComment = async (id) => {
  const res = await api.delete(`/comment/${id}`);
  return res;
};
