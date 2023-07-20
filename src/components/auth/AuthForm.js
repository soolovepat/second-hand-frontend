import styled, { css } from "styled-components";
import Input from "../../common/Input";
import Select from "../../common/Select";
import Button from "../../common/Button";
import { GoogleLoginButton } from "./GoogleAuthForm";
import theme from "../../lib/styles/Theme";

const AuthForm = ({
  type,
  formData,
  category,
  categories,
  openSelect,
  ...rest
}) => {
  return (
    <AuthFormBlock type={type}>
      <p className="title">{type === "login" ? "로그인" : "회원가입"}</p>
      {type === "register" && (
        <p className="label">아이디 {" (영문 소문자, 숫자 조합 4-10자리)"}</p>
      )}
      <Input
        w={"80%"}
        h={"45px"}
        ph={"아이디"}
        name={"username"}
        value={formData.username}
        onChange={rest.onChangeform}
        onFocus={() => alert("구글 로그인을 이용해주세요.")}
      />
      {type === "register" && (
        <p className="label">
          비밀번호 {" (영문, 숫자, 특수문자 조합 8-15자리)"}
        </p>
      )}
      <Input
        w={"80%"}
        h={"45px"}
        ph={"비밀번호"}
        name={"password"}
        type={"password"}
        value={formData.password}
        onChange={rest.onChangeform}
        onFocus={() => alert("구글 로그인을 이용해주세요.")}
      />
      {type === "register" && (
        <>
          <p className="label">비밀번호 확인</p>
          <Input
            w={"80%"}
            h={"45px"}
            ph={"비밀번호 확인"}
            type={"password"}
            value={rest.checkPW}
            onChange={rest.onCheckPW}
            onFocus={() => alert("구글 로그인을 이용해주세요.")}
          />
          <p className="label">닉네임</p>
          <Input
            w={"80%"}
            h={"45px"}
            ph={"닉네임"}
            name={"nickname"}
            value={formData.nickname}
            onChange={rest.onChangeform}
            onFocus={() => alert("구글 로그인을 이용해주세요.")}
          />
          <p className="label">카테고리</p>
          <Select
            w={"80%"}
            a
            value={category}
            options={categories}
            openSelect={openSelect}
            placeholder={"관심있는 카테고리"}
            onToggleHandler={rest.onToggleSelect}
            onClickHandler={rest.onClickSelect}
            onFocus={() => alert("구글 로그인을 이용해주세요.")}
          />
        </>
      )}
      {!openSelect && (
        <Button
          size="lg"
          bgcolor={theme.primaryColor}
          color={theme.whiteColor}
          onClick={rest.onSubmit}>
          {type === "register" ? "회원가입" : "로그인"}
        </Button>
      )}
      {type === "login" && (
        <>
          <div className="google">
            <GoogleLoginButton />
          </div>
          <p
            className="go-to-register"
            onClick={rest.goToRegister}
            onFocus={() => alert("구글 로그인을 이용해주세요.")}>
            {"회원가입 >"}
          </p>
        </>
      )}
    </AuthFormBlock>
  );
};

export default AuthForm;

const AuthFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 25px;
  height: 100%;
  position: relative;
  .title {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
  input {
    margin: 10px;
    padding-left: 20px;
    font-size: 1rem;
  }
  li {
    margin-top: 15px;
  }
  button {
    margin-top: 40px;
  }

  ${({ type }) =>
    type === "login" &&
    css`
      height: 550px;
      margin-top: 60px;
    `}

  .go-to-register {
    position: absolute;
    bottom: 8%;
    right: 8%;
    color: #565656;
    font-size: 1.2rem;
    cursor: pointer;
  }
  .google {
    margin-top: 70px;
    transform: scale(1.5);
  }
  .label {
    text-align: left;
    width: 75%;
    font-size: 0.8rem;
    color: ${theme.mediumGrayColor};
  }
`;
