import styled from "styled-components";
import Details from "../../components/details/Details";
import { useNavigate, useParams } from "react-router-dom";
import CommentsContainer from "../comments/CommentsContainer";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { deletePost, getPost, toggleSold } from "../../api/posts";
import Swal from "sweetalert2";

const DetailContainer = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const [currImgIndex, setCurrImgIndex] = useState(0);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("google_token")) {
      setUserEmail(jwt_decode(localStorage.getItem("google_token")).email);
    }
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await getPost(postId);
      setPost(response.data);
    };
    fetchPost();
  }, [postId]);

  const onIncreaseIdx = () => {
    if (post?.images && currImgIndex >= post.images.length - 1) {
      toast.warn("마지막 사진입니다.");
    } else {
      setCurrImgIndex(currImgIndex + 1);
    }
  };
  const onDecreaseIdx = () => {
    if (post?.images && currImgIndex <= 0) {
      toast.warn("첫번째 사진입니다.");
    } else {
      setCurrImgIndex(currImgIndex - 1);
    }
  };

  const onToggleSold = async () => {
    try {
      const response = await toggleSold(postId);
      if (response.data.statusCode === 200) {
        const response = await getPost(postId);
        setPost(response.data);
      }
      Swal.fire({
        position: "top",
        icon: "success",
        title: "판매 여부가 수정되었습니다 :)",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(`/${postId}/detail`);
    } catch (error) {
      console.error(error);
    }
  };

  const onEdit = () => {
    navigate(`/edit/${postId}`);
  };

  const onDelete = async () => {
    const result = await Swal.fire({
      title: "삭제 하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    });
    if (result.isConfirmed) {
      await submitDelete();
      navigate("/");
    }
  };

  const submitDelete = async () => {
    try {
      const response = await deletePost(postId);
      Swal.fire({
        position: "top",
        icon: "success",
        title: "삭제 완료 되었습니다 :)",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  if (!post) {
    //수정필요
    return <DetailBlock>로딩중...</DetailBlock>;
  }

  return (
    <DetailBlock>
      <Details
        post={post}
        currImgIndex={currImgIndex}
        isUsers={post.username === userEmail}
        onIncreaseIdx={onIncreaseIdx}
        onDecreaseIdx={onDecreaseIdx}
        onEdit={onEdit}
        onDelete={onDelete}
        onToggleSold={onToggleSold}
      />
      <CommentsContainer
        comments={post.commentList}
        post={post}
        setPost={setPost}
      />
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
    </DetailBlock>
  );
};

export default DetailContainer;

const DetailBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1350px;

  img {
    max-width: 550px;
    height: 350px;
    border-radius: 5px;
  }
`;
