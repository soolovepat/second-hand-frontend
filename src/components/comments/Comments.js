import styled from "styled-components";
import Button from "../../common/Button";
import Input from "../../common/Input";

const comments = ({
  comments,
  userEmail,
  onChange,
  editingCommentId,
  setEditingCommentId,
  handleEdit,
  handleDelete,
  isEdit,
  setIsEdit,
}) => {
  const onEditComment = (id) => {
    setEditingCommentId(id); // 수정 버튼을 누르면 editingCommentId 변경
    setIsEdit(true);
  };

  return (
    <CommentsBlock>
      {comments?.map((comment) => {
        return (
          <li key={comment.commentId}>
            {isEdit && editingCommentId === comment.commentId ? ( // editingCommentId와 현재 댓글의 id 비교
              <>
                <Input
                  w={"200px"}
                  ph={"수정하실 댓글을 작성해주세요"}
                  value={comment.content} // ???
                  onChange={(e) => onChange(comment.commentId, e.target.value)}
                />
                <Button
                  onClick={() =>
                    handleEdit(comment.commentId, comment.content)
                  }>
                  완료
                </Button>
              </>
            ) : (
              <>
                {userEmail.split("@")[0]}
                <span> {comment.content}</span>
                {comment.username === userEmail && (
                  <Button onClick={() => onEditComment(comment.commentId)}>
                    수정
                  </Button>
                )}
              </>
            )}
            {comment.username === userEmail && (
              <Button onClick={() => handleDelete(comment.commentId)}>
                삭제
              </Button>
            )}
          </li>
        );
      })}
    </CommentsBlock>
  );
};

export default comments;

const CommentsBlock = styled.div`
  min-height: 500px;
  li {
    height: 30px;
    list-style: none;
    border-bottom: 0.7px solid #ccc;
    margin-top: 30px;
    padding-left: 5px;
  }
`;
