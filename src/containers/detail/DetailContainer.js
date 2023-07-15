import styled from "styled-components";
import Details from "../../components/details/Details";
import { useParams } from "react-router-dom";
import CommentsContainer from "../comments/CommentsContainer";

const DetailContainer = () => {
  //   const params = useParams();

  //mockup data
  const exampleNickname = "nickname213";
  const example = {
    title: "당근 판매해요.",
    content: "판매합니다. 귀여워요.",
    price: 2000,
    category: "디지털기기",
    isSold: false,
    img: [],
    commentList: [
      { postId: 3, content: "우와 갖고싶어요" },
      { postId: 4, content: "귀엽다" },
      { postId: 4, content: "500원에 살게요" },
    ],
  };

  return (
    <DetailBlock>
      <Details example={example} exampleNickname={exampleNickname} />
      <CommentsContainer comments={example.commentList} />
    </DetailBlock>
  );
};

export default DetailContainer;

const DetailBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 550px;
    height: 350px;
    border-radius: 5px;
  }
`;
