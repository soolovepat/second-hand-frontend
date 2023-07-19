import React from "react";
import { css, styled } from "styled-components";
import theme from "../../lib/styles/Theme";

const List = ({ post }) => {
  if (!post) {
    return <ListBlock>Loading...</ListBlock>;
  }
  return (
    <ListBlock src={post.images[0]} isSold={post.isSold}>
      <span className="wrap-thumb">
        <span className="thumb-img" />
        {post?.isSold && <div className="sold">거래 완료</div>}
      </span>
      <strong>{post.title}</strong>
      <span>{post.username?.split("@")[0]}</span>
      <span>
        <span>
          <span className="location">📍 </span>
          <span>{post.location}</span>
        </span>
        <strong> ₩ {post.price?.toLocaleString()}</strong>
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
    position: relative;

    ${(props) =>
      props.isSold &&
      css`
        .sold {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.3rem;
          color: ${theme.mediumGrayColor};
        }
      `}
  }

  .thumb-img {
    display: block;
    width: 100%;
    height: 170px;
    ${(props) =>
      props.src &&
      css`
        background-image: url(${props.src});
        background-repeat: no-repeat;
        background-size: cover;
      `}

    ${(props) =>
      props.isSold &&
      css`
        background-image: url(${props.src});
        opacity: 0.35;
      `}
  }

  .location {
    font-size: 1.1rem;
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
