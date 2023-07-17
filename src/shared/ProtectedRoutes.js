import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ userLoggedIn }) => {
  return userLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
