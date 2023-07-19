import styled from "styled-components";
import Input from "../../common/Input";
import Button from "../../common/Button";
import { FaRegComments } from "react-icons/fa";
import theme from "../../lib/styles/Theme";

const CommentInput = ({ onChange, onSubmit }) => {
  return (
    <CommentInputBlock>
      <FaRegComments />
      <Input
        w={"400px"}
        ph={"댓글을 남겨 판매자와 소통해보세요."}
        onChange={onChange}
      />
      <Button size="sm" bgcolor={theme.lightGrayColor} onClick={onSubmit}>
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
