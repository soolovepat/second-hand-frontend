import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import { DetailPage, MainPage, Mypage, WritePage } from "../pages/pages";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  logoutuser,
  setLoading,
  setUser,
} from "../redux/modules/user";
import { Navigate, Outlet } from "react-router-dom";

const checkIsLoggedIn = () => {
  if (localStorage.getItem("google_token")) {
    return true;
  }
  return false;
};

const Router = () => {
  const dispatch = useDispatch();
  const { user, userLoggedIn, isLoading } = useSelector(({ user }) => ({
    user: user.user,
    userLoggedIn: user.isLoggedIn,
    isLoading: user.isLoading,
  }));

  useEffect(() => {
    const verifyUser = async () => {
      if (checkIsLoggedIn()) {
        try {
          dispatch(loginUser());
          dispatch(setUser(jwt_decode(localStorage.getItem("google_token"))));
        } catch (e) {
          dispatch(logoutuser());
        }
      } else {
        dispatch(logoutuser());
      }
      dispatch(setLoading(false));
    };
    verifyUser();
  }, [userLoggedIn]);

  if (isLoading) {
    return null; // 권한 체크중 라우터 렌더링 방지
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id/detail" element={<DetailPage />} />
        <Route element={<AuthRoute userLoggedIn={userLoggedIn} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<ProtectedRoute userLoggedIn={userLoggedIn} />}>
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/write/:id" element={<WritePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

const AuthRoute = ({ userLoggedIn }) => {
  return userLoggedIn ? <Navigate to={"/"} /> : <Outlet />;
};

const ProtectedRoute = ({ userLoggedIn }) => {
  return userLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};
