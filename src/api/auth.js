import api from "./axios";

export const userLogin = async (req) => {
  //instance 및 아래 수정 필요
  const res = await api.post("/users", req);
  return res;
};

export const userRegister = async (req) => {
  const res = await api.post("/users", req);
  return res;
};

//로그인 인증
export const userInfo = async (req) => {};
