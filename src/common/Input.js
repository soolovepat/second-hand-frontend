import { styled } from "styled-components";
import theme from "../lib/styles/Theme";

const Input = ({
  w,
  h,
  ph,
  type,
  name,
  value,
  maxLength,
  onChange,
  onClick,
  onBlur,
}) => {
  return (
    <StyledInput
      w={w}
      h={h}
      placeholder={`${ph}`}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onClick={onClick}
      maxLength={maxLength}
      onBlur={onBlur}
    />
  );
};

export default Input;

const StyledInput = styled.input`
  border: 1px solid ${theme.lightGrayColor};
  border-radius: 25px;
  outline: none;
  width: ${(props) => `${props.w}`};
  height: ${(props) => `${props.h}`};
  height: 50px;
  font-size: 1rem;
  padding: 20px;

  &::placeholder {
    color: ${theme.mediumGrayColor};
  }
`;
