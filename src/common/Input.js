import { styled } from "styled-components";
import theme from "../lib/styles/Theme";

const Input = ({ w, h, ph, ...rest }) => {
  return <StyledInput w={w} h={h} placeholder={ph} {...rest} />;
};

export default Input;

const StyledInput = styled.input`
  border: 1px solid ${theme.lightGrayColor};
  border-radius: 32px;
  outline: none;
  width: ${(props) => `${props.w}`};
  height: ${(props) => `${props.h}`};
  font-size: 1rem;
  padding: 0 20px;

  &::placeholder {
    color: ${theme.mediumGrayColor};
  }
`;
