import AuthForm from "../../components/auth/AuthForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "../../components/common/Toast";

const LoginContainer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      // await signin(formData);
      console.log("로그인 성공");
      // dispatch(loginSuccess());
      navigate("/mainpage");
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeform = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const goToRegister = () => {
    navigate("/register");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(formData).every((item) => item !== "")) {
      toast.error("정보를 모두 입력해주세요.");
      return;
    }
    //아이디, 비밀번호 틀렸을 경우 에러 처리 필요
    // if () {
    //   return;
    // }
    handleLogin();
  };

  return (
    <>
      <AuthForm
        type={"login"}
        formData={formData}
        onChangeform={onChangeform}
        onSubmit={onSubmit}
        goToRegister={goToRegister}
      />
      <Toast />
    </>
  );
};

export default LoginContainer;
