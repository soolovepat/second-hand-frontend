import React from "react";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../common/Button";
import Swal from "sweetalert2";
import { logoutuser } from "../../redux/modules/user";
import { logo } from "../../assets/logo";
import theme from "../../lib/styles/Theme";
import SearchContainer from "../../containers/main/SearchContainer";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLoggedIn = useSelector(({ user }) => user.isLoggedIn);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    Swal.fire({
      title: "로그아웃 하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("로그아웃 되었습니다.");
        localStorage.removeItem("google_token");
        dispatch(logoutuser());
      }
    });
  };

  const handleWrite = () => {
    navigate("/write");
  };

  const handleMypage = () => {
    navigate("/mypage");
  };

  return (
    <HeaderBlock>
      <div className="logo-wrapper">
        <Link to={"/"}>
          <img className="logo-img" src={logo} />
        </Link>
      </div>
      <div className="search-bar">
        <SearchContainer />
      </div>
      {userLoggedIn ? (
        <div className="button-wrapper">
          <span onClick={handleLogout}>로그아웃</span>
          <Link to={"/mypage"}>마이페이지</Link>

          <Button
            size={"md"}
            bgcolor={theme.darkColor}
            color={theme.whiteColor}
            onClick={handleWrite}>
            글쓰기
          </Button>
        </div>
      ) : (
        <div className="button-wrapper">
          <Button size={"md"} bgcolor={theme.grayColor} onClick={handleLogin}>
            로그인
          </Button>
          <Button
            size={"md"}
            bgcolor={theme.primaryColor}
            color={theme.whiteColor}
            onClick={handleWrite}>
            글쓰기
          </Button>
        </div>
      )}
    </HeaderBlock>
  );
};

export default Header;

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: ${theme.whiteColor};
  z-index: 10;

  .button-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;

    span {
      cursor: pointer;
    }

    a {
      margin-right: 6px;
    }
  }

  .search-bar {
    position: absolute;
    right: 210px;
    top: 15%;
  }
  input {
    border: 1px solid ${theme.grayColor};
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
  }

  .logo-img {
    width: 200px;
  }
`;
