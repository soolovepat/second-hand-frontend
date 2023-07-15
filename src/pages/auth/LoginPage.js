import AuthTemplate from "../../containers/auth/AuthTemplate";
import LoginContainer from "../../containers/auth/LoginContainer";

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginContainer />
    </AuthTemplate>
  );
};

export default LoginPage;
