import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import { DetailPage, MainPage, Mypage, WritePage } from "../pages/pages";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import AuthRoutes from "./AuthRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutuser, setUser } from "../redux/modules/user";

const checkIsLoggedIn = () => {
  if (localStorage.getItem("google_token")) {
    return true;
  }
  return false;
};

const Router = () => {
  const dispatch = useDispatch();
  const { user, userLoggedIn } = useSelector(({ user }) => ({
    user: user.user,
    userLoggedIn: user.isLoggedIn,
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
    };
    verifyUser();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mainpage" element={<MainPage />} />

        <Route element={<AuthRoutes userLoggedIn={userLoggedIn} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route element={<ProtectedRoutes userLoggedIn={userLoggedIn} />}>
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/:postId/detail" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
