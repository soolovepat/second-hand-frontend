import React from "react";
import Header from "../../components/common/Header";
import styled from "styled-components";

const Mypage = () => {
  return (
    <>
      <Header />
      <MypageBlock>
        <h1>Mypage</h1>
        <div className="mypage-container">
          <section>
            <strong>내 프로필</strong>
          </section>
          <section>
            <strong>내 게시물</strong>
          </section>
        </div>
      </MypageBlock>
    </>
  );
};

export default Mypage;

const MypageBlock = styled.div`
  width: 950px;
  margin: 0 auto;

  h1 {
    text-align: center;
  }

  strong {
    font-size: 20px;
  }

  .mypage-container {
    margin: 150px 0;
    display: flex;
    justify-content: space-between;
  }
`;
