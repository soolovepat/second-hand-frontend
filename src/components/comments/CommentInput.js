import styled from "styled-components";
import Input from "../../common/Input";
import Button from "../../common/Button";
import { FaRegComments } from "react-icons/fa";
import theme from "../../lib/styles/Theme";

const CommentInput = ({ userEmail, comment, onChange, onSubmit }) => {
  return (
    <CommentInputBlock>
      <FaRegComments />
      <Input
        h={"48px"}
        ph={`${userEmail.split("@")[0]}(으)로 판매자에게 댓글 남기기...`}
        value={comment}
        onChange={onChange}
      />
      <Button
        size={"md"}
        bgcolor={theme.darkGrayColor}
        color={theme.whiteColor}
        hbgcolor={theme.primaryColor}
        hbordercolor={theme.primaryColor}
        hcolor={theme.whiteColor}
        onClick={onSubmit}
      >
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
