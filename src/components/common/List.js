import React from "react";
import { css, styled } from "styled-components";
import theme from "../../lib/styles/Theme";
import { FaLocationDot } from "react-icons/fa6";

const List = ({ post }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };
  if (!post) {
    return <ListBlock>등록된 게시물이 없습니다.</ListBlock>;
  }
  return (
    <ListBlock src={post.images[0]} isSold={post.isSold}>
      <span className="wrap-thumb">
        <span className="thumb-img" />
        {post?.isSold && <div className="isSold">거래 완료</div>}
      </span>
      <span className="wrap-text-1">
        <strong>{truncateText(post.title, 26)}</strong>
        <span>{post.username?.split("@")[0]}</span>
      </span>
      <span className="wrap-text-2">
        <span>
          <span className="location">
            <FaLocationDot /> <span>{truncateText(post.location, 10)}</span>
          </span>
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
  height: 345px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px;
  padding: 0 24px 16px;
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
        .isSold {
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
    font-size: 0.9rem;
    color: ${theme.mediumGrayColor};
    position: relative;
    left: -2px;

    svg {
      font-size: 1.1rem;
      color: ${theme.lightGrayColor};
      transform: translateY(4px);
    }
  }

  strong {
    font-size: 18px;
    font-weight: 600;
  }

  > span {
    display: flex;
    line-height: 30px;

    font-size: 14px;
    font-weight: 500;
  }

  .wrap-text-1 {
    flex-direction: column;
    height: 90px;
  }

  .wrap-text-2 {
    justify-content: space-between;
  }
`;
