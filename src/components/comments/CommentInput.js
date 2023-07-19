import styled from "styled-components";
import Input from "../../common/Input";
import Button from "../../common/Button";
import { FaRegComments } from "react-icons/fa";
import theme from "../../lib/styles/Theme";

const CommentInput = ({ comment, setComment }) => {
  const onChangeText = (e) => {
    setComment(e.target.value);
    console.log(comment);
  };
  const onAddComment = comment;
  return (
    <CommentInputBlock>
      <FaRegComments />
      <Input onChange={onChangeText} ph={"판매자에게 댓글 남기기..."} />
      <Button onClick={onAddComment} size="sm" bgcolor={theme.lightGrayColor}>
        게시
      </Button>
    </CommentInputBlock>
  );
};

export default CommentInput;

const CommentInputBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0px;

  input {
    flex: 0.95;
  }

  button {
    font-size: 1rem;
  }
`;
