import styled from "styled-components";
import Button from "../../common/Button";
import Input from "../../common/Input";
import theme from "../../lib/styles/Theme";
import { FaTrash, FaCheck } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";

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
                <ContentWrapper>
                  {comment.username.split("@")[0]}
                  <Input
                    w={"696px"}
                    h={"35px"}
                    ph={"수정하실 댓글을 작성해주세요"}
                    value={comment.content} // 기존 댓글
                    onChange={(e) =>
                      onChange(comment.commentId, e.target.value)
                    }
                  />
                </ContentWrapper>
                <ButtonWrapper>
                  <Button
                    size={"sm"}
                    bgcolor={theme.whiteColor}
                    bordercolor={theme.lightGrayColor}
                    color={theme.mediumGrayColor}
                    hbgcolor={theme.secondaryColor}
                    hbordercolor={theme.secondaryColor}
                    hcolor={theme.darkGrayColor}
                    onClick={() =>
                      handleEdit(comment.commentId, comment.content)
                    }
                  >
                    <FaCheck />
                  </Button>
                  <Button
                    size={"sm"}
                    bgcolor={theme.whiteColor}
                    bordercolor={theme.lightGrayColor}
                    color={theme.mediumGrayColor}
                    hbgcolor={theme.secondaryColor}
                    hbordercolor={theme.secondaryColor}
                    hcolor={theme.darkGrayColor}
                    onClick={() => handleDelete(comment.commentId)}
                  >
                    <FaTrash />
                  </Button>
                </ButtonWrapper>
              </>
            ) : (
              <>
                <ContentWrapper>
                  {comment.username.split("@")[0]}
                  <span> {comment.content}</span>
                </ContentWrapper>
                {comment.username === userEmail && (
                  <ButtonWrapper>
                    <Button
                      size={"sm"}
                      bgcolor={theme.whiteColor}
                      bordercolor={theme.lightGrayColor}
                      color={theme.mediumGrayColor}
                      hbgcolor={theme.secondaryColor}
                      hbordercolor={theme.secondaryColor}
                      hcolor={theme.darkGrayColor}
                      onClick={() => onEditComment(comment.commentId)}
                    >
                      <FaPenToSquare />
                    </Button>
                    <Button
                      size={"sm"}
                      bgcolor={theme.whiteColor}
                      bordercolor={theme.lightGrayColor}
                      color={theme.mediumGrayColor}
                      hbgcolor={theme.secondaryColor}
                      hbordercolor={theme.secondaryColor}
                      hcolor={theme.darkGrayColor}
                      onClick={() => handleDelete(comment.commentId)}
                    >
                      <FaTrash />
                    </Button>
                  </ButtonWrapper>
                )}
              </>
            )}
          </li>
        );
      })}
    </CommentsBlock>
  );
};

export default comments;

const CommentsBlock = styled.div`
  min-height: 200px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    border-bottom: 1px solid ${theme.lightGrayColor};
    padding: 10px 0;
    height: 56px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;

  /* > button:hover {
    color: ${theme.darkGrayColor};
    background-color: ${theme.secondaryColor};
  } */
`;
