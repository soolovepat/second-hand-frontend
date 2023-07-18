import CommentInput from "../../components/comments/CommentInput";
import Comments from "../../components/comments/Comments";
import styled from "styled-components";
import theme from "../../lib/styles/Theme";

const CommentsContainer = ({ comments }) => {
  return (
    <DetailBlock>
      <CommentInput />
      <Comments comments={comments} />
    </DetailBlock>
  );
};

export default CommentsContainer;

const DetailBlock = styled.div`
  border-top: 1px solid ${theme.lightGrayColor};
  width: 60%;
`;
