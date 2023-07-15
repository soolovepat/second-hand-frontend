import styled from "styled-components";

const comments = ({ comments }) => {
  return (
    <CommentsBlock>
      {comments?.map((comment) => (
        <li key={comment.postId}>{comment.content}</li>
      ))}
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
