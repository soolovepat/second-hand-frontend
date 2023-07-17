import axios from "axios";
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

//구글 사용자 정보 요청
export const googleUserInfo = async () => {
  const currentToken = localStorage.getItem("google_token");
  const res = await axios.get(
    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${currentToken}`,
  );
  console.log(res);
  return res;
  //  catch (error) {
  //     if (error.response && error.response.status === 401) {
  //       throw new Error("Invalid token");
  //     }
  //     throw error;
  //   }
};
