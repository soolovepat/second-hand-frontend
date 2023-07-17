import React from "react";
import { styled } from "styled-components";

const List = ({ post }) => {
  return (
    <ListBlock>
      <span className="wrap-thumb">
        <span className="thumb-img" />
      </span>
      <strong>{post.title}</strong>
      <span>nickname123</span>
      <span>
        <span>
          <span>icon · </span>
          <span>서울특별시</span>
        </span>
        <strong>{post.price}</strong>
      </span>

      <span></span>
    </ListBlock>
  );
};

export default List;

const ListBlock = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 15px;
  padding: 0 24px 28px;
  border-radius: 20px;
  box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.06);
    transform: translateY(-10px);
  }

  .wrap-thumb {
    margin: 0 -24px 28px;
  }

  .thumb-img {
    display: block;
    width: 100%;
    height: 170px;
    background-color: #34d46d;
  }

  strong {
    font-size: 18px;
    font-weight: 600;
  }

  > span {
    display: flex;
    line-height: 30px;
    justify-content: space-between;

    font-size: 14px;
    font-weight: 600;

    &:nth-child(3) {
      padding: 10px 0 30px 0;
    }
  }
`;
