import React, { useEffect, useState } from "react";
import Input from "../../common/Input";
import { getPosts } from "../../api/posts";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import theme from "../../lib/styles/Theme";

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
      }))
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

      <div className={openSearchBar ? "search-results" : ""}>
        {openSearchBar &&
          titles.map((post) => {
            if (post.title.includes(searchText)) {
              return (
                <li
                  onClick={(e) => {
                    e.stopPropagation();
                    onClickItem(post.id);
                  }}
                >
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
  input {
    font-size: 1rem;
    height: 30px;
  }
  .search {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .icon {
    margin-right: 10px;
    font-size: 1.4rem;
  }

  .search-results {
    position: absolute;
    max-height: 272px;
    width: 260px;
    display: flex;
    flex-direction: column;
    margin: 14px 0 0 30px;
    background: white;
    border: 1px solid ${theme.lightGrayColor};
    border-radius: 20px;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 100;

    &::-webkit-scrollbar {
      background: transparent;
      width: 10px;
      //padding: 20px;
    }

    &::-webkit-scrollbar-track {
      //padding: 10px;
      margin: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.lightGrayColor};
      border-radius: 8px;
    }
  }

  li:nth-child(1) {
    margin-top: 10px;
  }

  li {
    list-style: none;
    margin: 4px 10px;
    padding: 14px 18px;
    border-radius: 24px;

    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;
