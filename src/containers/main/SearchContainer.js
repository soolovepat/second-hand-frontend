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
      response.data.postList.map((post) => ({
        title: post.title,
        postId: post.postId,
      }))
    );
  };

  const onClickItem = (postId) => {
    console.log(postId);
    navigate(`/${postId}/detail`);
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

      <ul className={openSearchBar ? "search-results" : ""}>
        {openSearchBar &&
          // eslint-disable-next-line array-callback-return
          titles.map((post) => {
            if (post.title.includes(searchText)) {
              return (
                <li
                  onClick={(e) => {
                    console.log(post);
                    e.stopPropagation();
                    onClickItem(post.postId);
                  }}
                >
                  {post.title} {" →"}
                </li>
              );
            }
          })}
      </ul>
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
    font-size: 1rem;
    color: ${theme.mediumGrayColor};
  }

  .search-results {
    position: absolute;
    max-height: 272px;
    width: 260px;
    display: flex;
    flex-direction: column;
    margin: 14px 0 0 26px;
    padding: 8px 0;
    background: white;
    border: 1px solid ${theme.lightGrayColor};
    border-radius: 22px;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 100;

    &::-webkit-scrollbar {
      background: transparent;
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      margin: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.lightGrayColor};
      border-radius: 8px;
    }

    & li {
      list-style: none;
      line-height: 24px;
      margin: 2px 10px;
      padding: 10px 20px;
      border-radius: 24px;
      transition: all 0.1s ease-in-out;

      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;
