import styled, { css } from "styled-components";
import Button from "../../common/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import theme from "../../lib/styles/Theme";

const Details = ({
  post,
  currImgIndex,
  onIncreaseIdx,
  onDecreaseIdx,
  onEdit,
  onDelete,
  isUsers,
}) => {
  const { title, price, content, category, imgs } = post;

  if (!post) {
    return <div>...로딩</div>;
  }

  return (
    <>
      <DetailHeaderBlock className="detailHeader">
        <div className="detail-title">상품 상세 보기</div>
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
      <DetailDescBlock>
        <div className="carousel">
          <div
            className="img-container"
            style={{ transform: `translateX(-${currImgIndex * 100}%)` }}>
            {imgs?.map((src, idx) => (
              <div key={idx} className="img-wrapper">
                <img src={src} alt="product" />
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
        <CarouselDots currImgIndex={currImgIndex} imgLength={imgs?.length} />
        <div className="content">{content}</div>
        <div className="buttons">
          {isUsers ? (
            <>
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
  height: 350px;
  padding-top: 60px;

  .detail-title {
    font-size: 1.4rem;
  }

  .header-detail {
    width: 60%;
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
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
      margin-bottom: 20px;
    }
  }
`;

const DetailDescBlock = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid lightgray;

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
      position: absolute; // 아이콘들을 절대 위치로 배치해 주세요.
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

      img {
        max-width: 100%;
        max-height: 500px;
        object-fit: contain;
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
