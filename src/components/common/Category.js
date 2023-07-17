import React, { useState } from "react";
import { styled } from "styled-components";

const Category = ({ selectList, setSelectList, CATENAME }) => {
  const onClickCate = (cate) => {
    setSelectList(cate);
  };

  return (
    <CategoryBlock>
      {CATENAME.map((cate, id) => (
        <li
          key={id}
          className={id === selectList.id ? "active" : ""}
          onClick={() => onClickCate(cate)}
        >
          {cate.name}
        </li>
      ))}
    </CategoryBlock>
  );
};

export default Category;

const CategoryBlock = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 100px;

  & li:hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: #ffffff;
  }

  & .active {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.whiteColor};
  }

  li {
    padding: 10px 20px;
    border-radius: 20px;
    color: ${(props) => props.theme.mediumGrayColor};
    cursor: pointer;
    transition: all 0.1s ease-in-out;
  }
`;
