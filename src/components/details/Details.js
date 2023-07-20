import styled, { css } from "styled-components";
import Button from "../../common/Button";
import { FaChevronLeft, FaChevronRight, FaTrash } from "react-icons/fa";
import { FaLocationDot, FaPenToSquare } from "react-icons/fa6";
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
          <div className="header-left">
            <strong className="title">{title}</strong>
            <span className="username">{post.username?.split("@")[0]}</span>
          </div>
          <div className="header-right">
            <span className="category">{category}</span>
            <span className="price">₩ {price?.toLocaleString()}</span>
          </div>
        </div>
      </DetailHeaderBlock>

      <DetailDescBlock isSold={isSold}>
        <p className="location">
          <FaLocationDot /> {location}
        </p>
        <div className="carousel">
          <div
            className="img-container"
            style={{ transform: `translateX(-${currImgIndex * 100}%)` }}
          >
            {images?.map((src, idx) => (
              <div key={idx} className="img-wrapper">
                <img src={src} alt="product" />
                {isSold && <div className="sold">판매 완료</div>}
              </div>
            ))}
          </div>
          {images.length > 1 ? (
            <>
              <p className="icons left">
                <FaChevronLeft onClick={onDecreaseIdx} />
              </p>
              <p className="icons right">
                <FaChevronRight onClick={onIncreaseIdx} />
              </p>
              <CarouselDots
                currImgIndex={currImgIndex}
                imgLength={images?.length}
              />
            </>
          ) : null}
        </div>

        <div className="content">{content}</div>
        <div className="buttons">
          {isUsers ? (
            <>
              {!isSold ? (
                <Button
                  size="md"
                  onClick={onToggleSold}
                  bgcolor={theme.primaryColor}
                  bordercolor={theme.primaryColor}
                  color={theme.whiteColor}
                  hbgcolor={theme.secondaryColor}
                  hbordercolor={theme.secondaryColor}
                  hcolor={theme.darkGrayColor}
                >
                  판매 완료
                </Button>
              ) : (
                <Button
                  size="md"
                  onClick={onToggleSold}
                  bgcolor={theme.secondaryColor}
                  bordercolor={theme.secondaryColor}
                  color={theme.darkGrayColor}
                  hbgcolor={theme.primaryColor}
                  hbordercolor={theme.primaryColor}
                  hcolor={theme.whiteColor}
                >
                  판매중
                </Button>
              )}
              <Button
                size="md"
                onClick={onEdit}
                bgcolor={theme.whiteColor}
                bordercolor={theme.lightGrayColor}
                color={theme.mediumGrayColor}
                hbgcolor={theme.secondaryColor}
                hbordercolor={theme.secondaryColor}
                hcolor={theme.darkGrayColor}
              >
                <FaPenToSquare />
              </Button>
              <Button
                size="md"
                onClick={onDelete}
                bgcolor={theme.whiteColor}
                bordercolor={theme.lightGrayColor}
                color={theme.mediumGrayColor}
                hbgcolor={theme.secondaryColor}
                hbordercolor={theme.secondaryColor}
                hcolor={theme.darkGrayColor}
              >
                <FaTrash />
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
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
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
  width: 1020px;
  border-bottom: 1px solid ${theme.lightGrayColor};

  .header-left {
    display: flex;
    flex-direction: column;
  }

  .header-right {
    display: flex;
    flex-direction: column;
    text-align: right;
  }

  .detail-title {
    ${theme.h1box}
  }

  .header-detail {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;

    .title {
      font-size: 1.3rem;
      font-weight: bold;
    }
    .username {
      margin-top: 16px;
      font-size: 1rem;
    }
    .price {
      margin-top: 16px;
      font-size: 1.3rem;
      font-weight: bold;
    }
    .category {
      font-size: 1rem;
    }
  }
`;

const DetailDescBlock = styled.div`
  width: 1020px;
  display: flex;
  flex-direction: column;
  //align-items: center;
  margin-top: 30px;

  .location {
    font-weight: 400;
    color: ${theme.mediumGrayColor};

    > svg {
      position: relative;
      top: 2px;
      color: ${theme.lightGrayColor};
    }
  }

  .carousel {
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;
    margin-top: 20px;

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
