import styled, { css } from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Details = ({
  example,
  exampleNickname,
  currImgIndex,
  onIncreaseIdx,
  onDecreaseIdx,
}) => {
  const { title, price, content, category, img } = example;
  return (
    <>
      <DetailHeaderBlock className="detailHeader">
        <div className="detail-title">상품 상세 보기</div>
        <div className="header-detail">
          <div>
            <p className="title">{title}</p>
            <p className="nickname">{exampleNickname}</p>
          </div>
          <div>
            <p className="category">{category}</p>
            <p className="price">₩ {price.toLocaleString()}</p>
          </div>
        </div>
      </DetailHeaderBlock>
      <DetailDescBlock>
        <div className="images">
          <p>
            <FaChevronLeft onClick={onDecreaseIdx} />
          </p>
          <ImageBlock>
            <img src={img[currImgIndex]} alt="product" />
          </ImageBlock>
          <p>
            <FaChevronRight onClick={onIncreaseIdx} />
          </p>
        </div>
        <CarouselDots currImgIndex={currImgIndex} imgLength={img.length} />
        <div className="content">{content}</div>
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
    .nickname {
      margin-top: 15px;
      font-size: 0.8rem;
    }
    .price {
      font-size: 1.1rem;
      font-weight: bold;
    }
    .category {
      margin: 10px 15px;
    }
  }
`;

const DetailDescBlock = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid lightgray;

  p {
    width: 50px;
    font-size: 3rem;
    color: #ccc;
    margin: 20px;
    cursor: pointer;
  }

  .images {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .content {
    width: 100%;
    text-align: start;
    min-height: 250px;
    padding: 50px;
  }
`;

const ImageBlock = styled.div`
  transition: transform 1s ease-out;
  img {
    max-width: 500px;
    max-height: 400px;
  }
`;
