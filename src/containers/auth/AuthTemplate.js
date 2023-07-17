import styled from "styled-components";

const AuthTemplate = ({ children }) => {
  return (
    <Wrapper>
      <div>로고</div>
      <AuthTemplateBlock>{children}</AuthTemplateBlock>
    </Wrapper>
  );
};

export default AuthTemplate;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const AuthTemplateBlock = styled.div`
  width: 480px;
  min-width: 200px;
  height: 600px;
  margin: auto;
  border-radius: 30px;
  box-shadow: rgba(100, 100, 111, 0.25) 0px 7px 29px 0px;
`;
