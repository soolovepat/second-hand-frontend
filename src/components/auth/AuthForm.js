import styled, { css } from "styled-components";
import Input from "../../common/Input";
import Select from "../../common/Select";
import Button from "../../common/Button";

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
      <Input
        w={"80%"}
        h={"45px"}
        ph={"아이디"}
        name={"username"}
        value={formData.username}
        onChange={rest.onChangeform}
      />
      <Input
        w={"80%"}
        h={"45px"}
        ph={"비밀번호"}
        name={"password"}
        type={"password"}
        value={formData.password}
        onChange={rest.onChangeform}
      />
      {type === "register" && (
        <>
          <Input
            w={"80%"}
            h={"45px"}
            ph={"비밀번호 확인"}
            type={"password"}
            value={rest.checkPW}
            onChange={rest.onCheckPW}
          />
          <Input
            w={"80%"}
            h={"45px"}
            ph={"닉네임"}
            name={"nickname"}
            value={formData.nickname}
            onChange={rest.onChangeform}
          />
          <Select
            w={"80%"}
            value={category}
            options={categories}
            openSelect={openSelect}
            placeholder={"관심있는 카테고리"}
            onToggleHandler={rest.onToggleSelect}
            onClickHandler={rest.onClickSelect}
          />
        </>
      )}
      {!openSelect && (
        <Button size="lg" color={"black"} onClick={rest.onSubmit}>
          {type === "register" ? "회원가입" : "로그인"}
        </Button>
      )}
      {type === "login" && (
        <p className="go-to-register" onClick={rest.goToRegister}>
          {"회원가입 >"}
        </p>
      )}
    </AuthFormBlock>
  );
};

export default AuthForm;

const AuthFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  height: 100%;
  position: relative;
  .title {
    font-size: 1.5rem;
    margin-bottom: 35px;
  }
  input {
    margin: 10px;
    padding-left: 20px;
    font-size: 1.1rem;
  }
  li {
    margin-top: 10px;
  }
  button {
    margin-top: 40px;
  }

  ${({ type }) =>
    type === "login" &&
    css`
      height: 400px;
      margin-top: 100px;
    `}

  .go-to-register {
    position: absolute;
    bottom: -18%;
    right: 8%;
    color: #565656;
    cursor: pointer;
  }
`;
