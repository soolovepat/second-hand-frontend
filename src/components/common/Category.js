import React, { useState } from "react";
import { styled } from "styled-components";

const Category = () => {
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
  const [selectList, setSelectList] = useState(CATENAME[0].name);
  const [cateList, setCateList] = useState(false);
  const onClickCate = (cate) => {
    setSelectList(cate);
    setCateList(!cateList);
    console.log(cateList);
  };

  return (
    <CategoryBlock>
      {CATENAME.map((cate, id) =>
        selectList && id === selectList.id ? (
          <li key={id} className="selected" onClick={() => onClickCate(cate)}>
            {cate.name}
          </li>
        ) : (
          <li key={id} onClick={() => onClickCate(cate)}>
            {cate.name}
          </li>
        )
      )}
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

  .selected {
    background-color: #a6d3ff;
  }

  li {
    padding: 10px 20px;
    border-radius: 20px;
  }
`;
