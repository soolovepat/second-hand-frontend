import React from "react";
import { styled } from "styled-components";

const Banner = () => {
  return (
    <BannerBlock>
      <div>
        <span>
          남에게 더 가치있게.
          <br />
          만원의 행복 🛍️
        </span>
        <p>사용하지 않는 물건을 등록해보세요 !</p>
      </div>
    </BannerBlock>
  );
};

export default Banner;

const BannerBlock = styled.div`
  display: flex;
  align-items: center;

  height: 22rem;
  padding: 0 8rem;

  background-color: #d9d9d9;

  span {
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.8rem;
  }

  p {
    margin-top: 14px;

    font-size: 1rem;
    font-weight: 600;
    line-height: 1.8rem;
  }
`;
