import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/modules/user";

export const GoogleLoginButton = () => {
  const dispatch = useDispatch();
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <GoogleLogin
        onSuccess={(res) => {
          localStorage.setItem("google_token", res.credential);
          dispatch(loginUser());
        }}
        onFailure={(e) => {
          console.log(e);
        }}
      />
    </GoogleOAuthProvider>
  );
};
