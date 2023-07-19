import { useParams } from "react-router-dom";
import WriteContainer from "../../containers/write/WriteContainer";
import { useEffect, useState } from "react";
import { getPost } from "../../api/posts";

const EditPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await getPost(postId);
      setPost(response.data);
    };
    fetchPost();
  }, [postId]);

  return (
    <WriteContainer
      editPost={post}
      editTitle={"상품 수정하기"}
      editComplete={"수정완료"}
    />
  );
};

export default EditPage;
