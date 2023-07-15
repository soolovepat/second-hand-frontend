import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const ListContainer = () => {
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/posts");
        setPostList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/users");
        setUserList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  const onClickHandler = (postId) => {
    console.log(postId);
    navigate(`/${postId}/detail`);
  };

  return (
    <ListContainerBlock>
      {postList?.map((post) => (
        <div onClick={() => onClickHandler(post.postId)}>
          <List key={post.title} post={post} />
        </div>
      ))}
    </ListContainerBlock>
  );
};

export default ListContainer;

const ListContainerBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  max-width: 1200px;
  margin: 30px auto 0;
  padding: 0 15px;
`;
