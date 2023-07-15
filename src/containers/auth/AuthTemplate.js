import styled from "styled-components";

const AuthTemplate = ({ children }) => {
  return <AuthTemplateBlock>{children}</AuthTemplateBlock>;
};

export default AuthTemplate;

const AuthTemplateBlock = styled.div`
  width: 480px;
  min-width: 200px;
  height: 600px;
  margin: auto;
  border-radius: 30px;
  box-shadow: rgba(100, 100, 111, 0.25) 0px 7px 29px 0px;
`;
