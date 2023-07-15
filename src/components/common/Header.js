import React from "react";
import { styled } from "styled-components";

const Header = () => {
  return (
    <HeaderBlock>
      <h3>로고</h3>
      <div>
        <span>로그인</span>
        <span>로그아웃</span>
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
