import React from "react";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../common/Button";
import Swal from "sweetalert2";
import { logoutuser } from "../../redux/modules/user";
import { logo } from "../../assets/logo";

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
      <h3>
        <Link to={"/"}>
          <img className="logo-img" src={logo} />
        </Link>
      </h3>
      {userLoggedIn ? (
        <>
          <Button size={"sm"} onClick={handleLogout}>
            로그아웃
          </Button>
          <Button size={"sm"} onClick={handleMypage}>
            마이페이지
          </Button>
          <Button size={"sm"} onClick={handleWrite}>
            글쓰기
          </Button>
        </>
      ) : (
        <>
          <Button size={"sm"} onClick={handleLogin}>
            로그인
          </Button>
          <Button size={"sm"} onClick={handleWrite}>
            글쓰기
          </Button>
        </>
      )}
    </HeaderBlock>
  );
};

export default Header;

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1020px;
  margin: 0 auto;
  padding: 30px;

  .logo-img {
    width: 200px;
  }
`;
