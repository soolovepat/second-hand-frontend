import React, { useEffect } from "react";
import { styled } from "styled-components";

const Pagenation = ({
  setCurrentPage,
  selectList,
  postList,
  itemsPerPage,
  currentPage,
}) => {
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
    <PaginationBlock>
      {generatePaginationNumbers().map((pageNumber) => (
        <PageNumber
          key={pageNumber}
          className={currentPage === pageNumber ? "active" : ""}
          onClick={() => handlePageChange(pageNumber)}>
          {pageNumber}
        </PageNumber>
      ))}
    </PaginationBlock>
  );
};

export default Pagenation;

const PaginationBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const PageNumber = styled.button`
  padding: 4px 12px;
  margin: 0 2px;
  border: none;
  border-radius: 20px;
  font-weight: 300px;
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.lightGrayColor};
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.whiteColor};
  }

  &.active {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.whiteColor};
  }
`;
