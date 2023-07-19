import api from "./axios";

export const writeComment = async (formData) => {
  const res = await api.post("comment", formData);
  return res;
};
export const editComment = async (id, content) => {
  const res = await api.post(`comment${id}`, content);
  return res;
};
export const deleteComment = async (id) => {
  const res = await api.post(`comment${id}`);
  return res;
};
