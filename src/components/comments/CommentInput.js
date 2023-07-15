import styled from "styled-components";
import Input from "../../common/Input";
import Button from "../../common/Button";
import { FaRegComments } from "react-icons/fa";

const CommentInput = () => {
  return (
    <CommentInputBlock>
      <FaRegComments />
      <Input w={"400px"} ph={"댓글을 남겨 판매자와 소통해보세요."} />
      <Button size="md" color={"black"}>
        게시
      </Button>
    </CommentInputBlock>
  );
};

export default CommentInput;

const CommentInputBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px;

  input {
    margin-left: 20px;
    font-size: 1rem;
  }

  button {
    margin-left: 20px;
    font-size: 1rem;
    font-weight: bold;
  }
`;
