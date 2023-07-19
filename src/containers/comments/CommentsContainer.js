import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CommentInput from "../../components/comments/CommentInput";
import Comments from "../../components/comments/Comments";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Toast } from "../../components/common/Toast";
import Swal from "sweetalert2";
import { writeComment } from "../../api/comments";
import styled from "styled-components";
import theme from "../../lib/styles/Theme";
import { useState } from "react";

const CommentsContainer = ({ comments }) => {
  const id = uuidv4();
  const [userEmail, setUserEmail] = useState("");
  const [formData, setFormData] = useState({
    postId: id,
    content: "",
    username: userEmail,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      if (localStorage.getItem("google_token")) {
        setUserEmail(jwt_decode(localStorage.getItem("google_token")).email);
        console.log(userEmail);
      } else {
        alert("로그인 후 이용해주세요 :)");
        navigate("/login");
      }
    };
    fetchUser();
  }, []);

  const onChange = (e) => {
    setFormData({ ...formData, content: e.target.value });
  };

  const handleWrite = async () => {
    try {
      const dataWithUsername = {
        ...formData,
        username: userEmail,
      };
      const response = await writeComment(dataWithUsername);
      console.log(response);
      Swal.fire({
        position: "top",
        icon: "success",
        title: "댓글 작성 완료 되었습니다 :)",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formData.content) {
      toast.error("댓글을 입력해주세요.");
      return;
    }
    handleWrite();
    setFormData({
      ...formData,
      id: uuidv4(),
      content: "",
      username: "",
    });
  };

  return (
    <DetailBlock>
      <CommentInput onChange={onChange} onSubmit={onSubmit} />
      <Comments comments={comments} />
      <Toast />
    </DetailBlock>
  );
};

export default CommentsContainer;

const DetailBlock = styled.div`
  border-top: 1px solid ${theme.lightGrayColor};
  width: 60%;
`;
