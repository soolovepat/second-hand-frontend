import { useEffect, useState } from "react";
import CommentInput from "../../components/comments/CommentInput";
import Comments from "../../components/comments/Comments";
import jwt_decode from "jwt-decode";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Toast } from "../../components/common/Toast";
import Swal from "sweetalert2";
import { writeComment, deleteComment, editComment } from "../../api/comments";
import styled from "styled-components";
import theme from "../../lib/styles/Theme";
import { getPost } from "../../api/posts";

const CommentsContainer = ({ comments: initialComments, post, setPost }) => {
  const { postId } = useParams();
  const [userEmail, setUserEmail] = useState("");
  const [formData, setFormData] = useState({
    postId: postId,
    content: "",
    username: userEmail,
  });
  const [comments, setComments] = useState(initialComments);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
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

  const onChangeWrite = (e) => {
    setFormData({ ...formData, content: e.target.value });
  };

  const onChangeEdit = (commentId, value) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.commentId === commentId
          ? { ...comment, content: value }
          : comment
      )
    );
  };

  // 댓글 추가
  const handleWrite = async () => {
    try {
      const dataWithUsername = {
        ...formData,
        username: userEmail,
      };
      const response = await writeComment(dataWithUsername);
      console.log(response);

      const newComment = {
        commentId: response.data.commentId,
        postId,
        content: formData.content,
        username: userEmail,
      };
      setComments([...comments, newComment]);

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
      id: postId,
      content: "",
      username: "",
    });
  };

  // 댓글 수정
  const handleEdit = async (commentId, content) => {
    try {
      const editedComment = {
        content,
      };
      const response = await editComment(commentId, editedComment);
      console.log(response);
      // setComments((prevComments) =>
      //   prevComments.map((comment) =>
      //     comment.commentId === id ? editedComment : comment
      //   )
      // );
      setIsEdit(false);

      Swal.fire({
        position: "top",
        icon: "success",
        title: "댓글 수정 되었습니다 :)",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 댓글 삭제
  const handleDelete = async (id) => {
    try {
      const response = await deleteComment(id);

      if (response.data.statusCode === 200) {
        const response = await getPost(postId);
        setPost(response.data);
      }

      Swal.fire({
        position: "top",
        icon: "success",
        title: "댓글 삭제 되었습니다 :)",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DetailBlock>
      <CommentInput
        comment={formData.content}
        onChange={onChangeWrite}
        onSubmit={onSubmit}
      />
      <Comments
        comments={comments}
        setComments={setComments}
        onChange={onChangeEdit}
        editingCommentId={editingCommentId}
        setEditingCommentId={setEditingCommentId}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      />
      <Toast />
    </DetailBlock>
  );
};

export default CommentsContainer;

const DetailBlock = styled.div`
  border-top: 1px solid ${theme.lightGrayColor};
  width: 60%;
`;
