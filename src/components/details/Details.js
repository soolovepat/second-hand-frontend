import styled from "styled-components";
import carrot from "../../assets/carrot.jpeg";

const Details = ({ example, exampleNickname }) => {
  return (
    <>
      <DetailHeaderBlock className="detailHeader">
        <div className="detail-title">상품 상세 보기</div>
        <div className="header-detail">
          <div>
            <p className="title">{example.title}</p>
            <p className="nickname">{exampleNickname}</p>
          </div>
          <div>
            <p className="price">₩ {example.price.toLocaleString()}</p>
          </div>
        </div>
      </DetailHeaderBlock>
      <DetailDescBlock>
        <img src={carrot} alt="product" />
        <div className="content">{example.content}</div>
      </DetailDescBlock>
    </>
  );
};

export default Details;

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
    width: 70%;
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
    }
  }
`;

const DetailDescBlock = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid lightgray;

  .content {
    width: 100%;
    text-align: start;
    min-height: 200px;
    padding: 40px 20px;
  }
`;
