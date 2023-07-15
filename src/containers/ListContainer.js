import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "../components/common/List";
import { styled } from "styled-components";
import Category from "../components/common/Category";

const ListContainer = () => {
  const [postList, setPostList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [selectList, setSelectList] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

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

  // 페이지 번호를 변경하는 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1); // CATENAME이 변경될 때마다 페이지네이션 초기화
  }, [selectList]);

  // 리스트의 총 개수를 구하는 함수
  const getTotalItemCount = () => {
    return selectList.name === "All"
      ? postList.length
      : postList.filter((post) => post.category === selectList.name).length;
  };

  // 페이지네이션 숫자를 동적으로 생성하는 함수
  const generatePaginationNumbers = () => {
    const totalItems = getTotalItemCount();
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  };

  return (
    <>
      <Category selectList={selectList} setSelectList={setSelectList} />
      <ListContainerBlock>
        {getCurrentList().map((post) => (
          <List key={post.title} post={post} />
        ))}
      </ListContainerBlock>
      <Pagination>
        {generatePaginationNumbers().map((pageNumber) => (
          <PageNumber
            key={pageNumber}
            active={currentPage === pageNumber}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </PageNumber>
        ))}
      </Pagination>
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.button`
  padding: 5px 10px;
  margin: 0 2px;
  background-color: ${(props) => (props.active ? "#a6d3ff" : "#ffffff")};
  color: ${(props) => (props.active ? "#ffffff" : "#000000")};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #a6d3ff;
    color: #ffffff;
  }
`;
