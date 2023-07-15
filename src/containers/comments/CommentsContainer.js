import CommentInput from "../../components/comments/CommentInput";
import Comments from "../../components/comments/Comments";

const CommentsContainer = ({ comments }) => {
  return (
    <div>
      <CommentInput />
      <Comments comments={comments} />
    </div>
  );
};

export default CommentsContainer;
