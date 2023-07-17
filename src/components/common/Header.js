import React from "react";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../common/Button";
import Swal from "sweetalert2";
import { logoutuser } from "../../redux/modules/user";

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

  return (
    <HeaderBlock>
      <h3>
        <Link to={"/mainpage"}>로고</Link>
      </h3>
      {userLoggedIn ? (
        <Button size={"sm"} onClick={handleLogout}>
          로그아웃
        </Button>
      ) : (
        <Button size={"sm"} onClick={handleLogin}>
          로그인
        </Button>
      )}
    </HeaderBlock>
  );
};

export default Header;

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;
