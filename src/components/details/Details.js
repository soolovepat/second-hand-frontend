import styled, { css } from "styled-components";
import Button from "../../common/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import theme from "../../lib/styles/Theme";

const Details = ({
  post,
  currImgIndex,
  onIncreaseIdx,
  onDecreaseIdx,
  onToggleSold,
  onEdit,
  onDelete,
  isUsers,
}) => {
  const { title, price, content, category, images, location, isSold } = post;

  if (!post) {
    return <div>...로딩</div>;
  }

  return (
    <>
      <DetailHeaderBlock className="detailHeader">
        <h1 className="detail-title">상품 상세 보기</h1>
        <div className="header-detail">
          <div>
            <p className="title">{title}</p>
            <p className="username">{post.username?.split("@")[0]}</p>
          </div>
          <div>
            <p className="category">{category}</p>

            <p className="price">₩ {price?.toLocaleString()}</p>
          </div>
        </div>
      </DetailHeaderBlock>
      <p className="location">📍 {location}</p>
      <DetailDescBlock isSold={isSold}>
        <div className="carousel">
          <div
            className="img-container"
            style={{ transform: `translateX(-${currImgIndex * 100}%)` }}>
            {images?.map((src, idx) => (
              <div key={idx} className="img-wrapper">
                <img src={src} alt="product" />
                {isSold && <div className="sold">판매 완료</div>}
              </div>
            ))}
          </div>
          <p className="icons left">
            <FaChevronLeft onClick={onDecreaseIdx} />
          </p>
          <p className="icons right">
            <FaChevronRight onClick={onIncreaseIdx} />
          </p>
        </div>
        <CarouselDots currImgIndex={currImgIndex} imgLength={images?.length} />

        <div className="content">{content}</div>
        <div className="buttons">
          {isUsers ? (
            <>
              {!isSold ? (
                <Button
                  size="sm"
                  onClick={onToggleSold}
                  bgcolor={theme.lightGrayColor}>
                  판매 완료
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={onToggleSold}
                  bgcolor={theme.lightGrayColor}>
                  판매중
                </Button>
              )}
              <Button size="sm" onClick={onEdit} bgcolor={theme.lightGrayColor}>
                수정
              </Button>
              <Button
                size="sm"
                onClick={onDelete}
                bgcolor={theme.lightGrayColor}>
                삭제
              </Button>
            </>
          ) : (
            <></>
          )}
        </div>
      </DetailDescBlock>
    </>
  );
};

export default Details;

const CarouselDots = ({ currImgIndex, imgLength }) => {
  return (
    <DotsBlock>
      {Array(imgLength)
        .fill(null)
        .map((_, idx) => (
          <Dot key={idx} active={currImgIndex === idx} />
        ))}
    </DotsBlock>
  );
};

const DotsBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ccc;
  margin: 0 5px;

  ${(props) =>
    props.active &&
    css`
      background: #333;
    `}
`;

const DetailHeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .detail-title {
    ${theme.h1box}
  }

  .header-detail {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;

    .title {
      font-size: 1.3rem;
      font-weight: bold;
    }
    .username {
      margin-top: 20px;
      font-size: 1rem;
    }
    .price {
      margin-left: 13px;
      font-size: 1.1rem;
      font-weight: bold;
    }
    .category {
      margin-bottom: 10px;
    }
    .location {
      margin: 10px 0px 0px 10px;
      font-weight: bold;
    }
  }
`;

const DetailDescBlock = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  .carousel {
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;

    .img-container {
      display: flex;
      transition: transform 0.5s ease-out;
      width: 100%;
      position: relative;
    }
    .icons {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 2rem;
      color: gray;
      cursor: pointer;
      width: auto;

      &.left {
        left: 10px;
      }

      &.right {
        right: 10px;
      }
    }

    .img-wrapper {
      flex: 0 0 100%;
      max-width: 100%;
      display: flex;
      justify-content: center;
      position: relative;

      img {
        ${(props) =>
          props.isSold &&
          css`
            opacity: 0.25;
          `}
        max-width: 100%;
        max-height: 500px;
        object-fit: contain;
      }

      .sold {
        position: absolute;
        top: 50%;
        font-size: 1.5rem;
        font-weight: bold;
        color: ${theme.mediumGrayColor};
      }
    }
  }

  .icons {
    width: 100px;
  }

  .content {
    width: 100%;
    text-align: start;
    min-height: 250px;
    padding: 40px 20px;
  }

  .buttons {
    width: 100%;
    text-align: end;
    margin-bottom: 5px;
    button {
      margin: 5px;
    }
  }
`;
