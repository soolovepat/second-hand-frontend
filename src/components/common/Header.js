import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderBlock>
      <h3>로고</h3>
      <div>
        <span>
          <Link to={"/login"}>로그인</Link>
        </span>
        <span>회원가입</span>
      </div>
    </HeaderBlock>
  );
};

export default Header;

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;

  span:first-child {
    padding-right: 14px;
  }
`;
