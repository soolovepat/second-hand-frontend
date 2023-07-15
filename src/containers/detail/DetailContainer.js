import styled from "styled-components";
import Details from "../../components/details/Details";
import { useParams } from "react-router-dom";
import CommentsContainer from "../comments/CommentsContainer";
import { carrot1, carrot0, carrot2, carrot3 } from "../../assets/exampleImages";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const DetailContainer = () => {
  //   const params = useParams();
  //mockup data
  const exampleNickname = "nickname213";
  const example = {
    title: "당근 판매해요.",
    content: "판매합니다. 귀여워요 🥕 ",
    price: 2000,
    category: "유아동",
    isSold: false,
    img: [carrot0, carrot1, carrot2, carrot3],
    commentList: [
      { postId: 3, content: "우와 갖고싶어요" },
      { postId: 4, content: "귀엽다" },
      { postId: 4, content: "500원에 살게요" },
    ],
  };
  const [currImgIndex, setCurrImgIndex] = useState(0);

  const onIncreaseIdx = () => {
    if (currImgIndex >= example.img.length - 1) {
      toast.warn("마지막 사진입니다.");
    } else {
      setCurrImgIndex(currImgIndex + 1);
    }
  };
  const onDecreaseIdx = () => {
    if (currImgIndex <= 0) {
      toast.warn("첫번째 사진입니다.");
    } else {
      setCurrImgIndex(currImgIndex - 1);
    }
  };

  return (
    <DetailBlock>
      <Details
        example={example}
        exampleNickname={exampleNickname}
        xu
        currImgIndex={currImgIndex}
        onIncreaseIdx={onIncreaseIdx}
        onDecreaseIdx={onDecreaseIdx}
      />
      <CommentsContainer comments={example.commentList} />
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
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
