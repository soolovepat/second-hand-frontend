import AuthForm from "../../components/auth/AuthForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CATEGORIES = [
  "All",
  "디지털기기",
  "가구/인테리어",
  "생활/주방",
  "유아동",
  "의류",
  "뷰티/미용",
  "도서",
];

const RegisterContainer = () => {
  const navigate = useNavigate();
  const [checkPW, setCheckPW] = useState(""); //비밀번호 확인
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    nickname: "",
    userCategory: "",
  });

  const [openSelect, setOpenSelect] = useState(false);

  // id, pw 영문 숫자 조합 8자리 이상
  const usernameValidation = /^[a-z0-9]{4,10}$/;
  const passwordValidation =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/;

  const onChangeform = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onCheckPW = (e) => {
    setCheckPW(e.target.value);
  };

  const onToggleSelect = () => {
    setOpenSelect(!openSelect);
  };

  const onClickSelect = (idx) => {
    setOpenSelect(!openSelect);
    setFormData({ ...formData, userCategory: CATEGORIES[idx] });
  };

  const handleRegister = async () => {
    try {
      // await signup(formData); 회원가입 api
      alert("회원가입 되었습니다. 로그인 해주세요");
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //유효성검사

    if (!Object.values(formData).every((item) => item !== "")) {
      toast.error("정보를 모두 입력해주세요.");
      return;
    }
    if (!usernameValidation.test(formData.username)) {
      toast.error("아이디는 영문 소문자, 숫자 조합 4-10자리입니다.");
      return;
    }
    if (!passwordValidation.test(formData.password)) {
      //수정
      toast.error("비밀번호는 영문, 숫자, 특수문자 조합 8-15자리입니다.");
      return;
    }
    if (checkPW !== formData.password) {
      toast("비밀번호가 다릅니다.");
      return;
    }

    handleRegister();
    setFormData({
      ...formData,
      username: "",
      password: "",
      nickname: "",
      userCategory: "",
    });
  };

  return (
    <>
      <AuthForm
        type={"register"}
        formData={formData}
        checkPW={checkPW}
        category={formData.userCategory}
        categories={CATEGORIES}
        openSelect={openSelect}
        onChangeform={onChangeform}
        onCheckPW={onCheckPW}
        onToggleSelect={onToggleSelect}
        onClickSelect={onClickSelect}
        onSubmit={onSubmit}
      />
      <Toast />
    </>
  );
};

export default RegisterContainer;

const Toast = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};
