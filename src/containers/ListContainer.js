import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "../components/common/List";
import { styled } from "styled-components";
import Category from "../components/common/Category";
import LikeItemList from "../components/common/LikeItemList";
import Pagenation from "../components/common/Pagenation";
import { getPosts } from "../api/posts";

const ListContainer = () => {
  const [postList, setPostList] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const CATENAME = [
    { id: 0, name: "All" },
    { id: 1, name: "디지털기기" },
    { id: 2, name: "가구/인테리어" },
    { id: 3, name: "생활/주방" },
    { id: 4, name: "유아동" },
    { id: 5, name: "의류" },
    { id: 6, name: "뷰티/미용" },
    { id: 7, name: "도서" },
  ];
  const [selectList, setSelectList] = useState(CATENAME[0]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        //const response = await axios.get("http://localhost:4000/posts");
        const response = await getPosts();
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
        setUserInfo(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  // 현재 페이지의 리스트 항목을 반환하는 함수
  const getCurrentList = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return selectList.name === "All"
      ? postList.slice(indexOfFirstItem, indexOfLastItem)
      : postList
          .filter((post) => !selectList || post.category === selectList.name)
          .slice(indexOfFirstItem, indexOfLastItem);
  };

  return (
    <>
      <LikeItemList postList={postList} userInfo={userInfo} />
      <Category
        selectList={selectList}
        setSelectList={setSelectList}
        CATENAME={CATENAME}
      />
      <ListContainerBlock>
        {getCurrentList().map((post) => (
          <List key={post.title} post={post} />
        ))}
      </ListContainerBlock>
      <Pagenation
        setCurrentPage={setCurrentPage}
        selectList={selectList}
        postList={postList}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default ListContainer;

const ListContainerBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  max-width: 1020px;
  margin: 30px auto 0;
  padding: 0 15px;
`;
