import { Navigate, Outlet } from "react-router-dom";

const AuthRoutes = ({ userLoggedIn }) => {
  return !userLoggedIn ? <Outlet /> : <Navigate to={"/mainpage"} />;
};

export default AuthRoutes;
