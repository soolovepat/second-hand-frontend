import styled from "styled-components";
import Details from "../../components/details/Details";
import { useParams } from "react-router-dom";
import CommentsContainer from "../comments/CommentsContainer";
// import { carrot1, carrot0, carrot2, carrot3 } from "../../assets/exampleImages";

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getPost } from "../../api/posts";

const DetailContainer = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  //mockup data
  const exampleNickname = "nickname213";

  const [currImgIndex, setCurrImgIndex] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await getPost(id);
      console.log(response);
      setPost(response[0]);
    };
    fetchPost();
  }, [id]);

  const onIncreaseIdx = () => {
    if (post?.img && currImgIndex >= post.img.length - 1) {
      toast.warn("마지막 사진입니다.");
    } else {
      setCurrImgIndex(currImgIndex + 1);
    }
  };
  const onDecreaseIdx = () => {
    if (post?.img && currImgIndex <= 0) {
      toast.warn("첫번째 사진입니다.");
    } else {
      setCurrImgIndex(currImgIndex - 1);
    }
  };

  if (!post) {
    //수정필요
    return <div>로딩중...</div>;
  }

  return (
    <DetailBlock>
      <Details
        post={post}
        exampleNickname={exampleNickname}
        currImgIndex={currImgIndex}
        onIncreaseIdx={onIncreaseIdx}
        onDecreaseIdx={onDecreaseIdx}
      />
      <CommentsContainer comments={post.commentList} />
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
