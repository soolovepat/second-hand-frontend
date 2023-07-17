import React, { useEffect, useState } from "react";
import Input from "../../common/Input";
import { getPosts } from "../../api/posts";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [titles, setTitles] = useState([]);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTitles();
  }, []);

  const onChangeText = (e) => {
    setSearchText(e.target.value);
  };

  const fetchTitles = async () => {
    const response = await getPosts();
    setTitles(
      response.data?.map((post) => ({
        title: post.title,
        id: post.id,
      })),
    );
  };

  const onClickItem = (id) => {
    navigate(`/${id}/detail`);
  };

  const onClickSearchBar = () => {
    setOpenSearchBar(true);
  };

  const onBlurSearchBar = () => {
    // using setTimeout to allow onClick to run first
    setTimeout(() => {
      setOpenSearchBar(false);
    }, 200);
  };

  return (
    <SearchBlock>
      <div onBlur={onBlurSearchBar} className="search">
        <>
          <div className="icon">
            <FaSearch />
          </div>
          <Input
            value={searchText}
            onChange={onChangeText}
            onClick={onClickSearchBar}
            ph={"검색어를 입력해주세요."}
          />
        </>
      </div>

      <div className="search-results">
        {openSearchBar &&
          titles.map((post) => {
            if (post.title.includes(searchText)) {
              return (
                <li
                  onClick={(e) => {
                    e.stopPropagation();
                    onClickItem(post.id);
                  }}>
                  {post.title} {" →"}
                </li>
              );
            }
          })}
      </div>
    </SearchBlock>
  );
};

export default SearchContainer;

const SearchBlock = styled.div`
  max-height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 300px;
  margin: 40px auto 0px auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .search {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .icon {
    margin: 20px 20px 20px 0px;
    font-size: 1.5rem;
  }

  .search-results {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  li {
    list-style: none;
    border: 1px solid #ccc;
    border-radius: 20px;
    margin: 10px;
    padding: 10px;
    height: 40px;
    cursor: pointer;
  }
`;
