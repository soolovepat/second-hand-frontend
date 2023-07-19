import { styled } from "styled-components";

const Button = ({ children, size, color, bgcolor, onClick }) => {
  return (
    <ButtonStyle size={size} color={color} bgcolor={bgcolor} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;

const sizes = {
  lg: "50px",
  md: "48px",
  sm: "35px",
};

const ButtonStyle = styled.button`
  padding: 0 20px;
  border-radius: 25px;
  border: 0;
  font-weight: 500;
  width: fit-content;
  cursor: pointer;
  min-width: 85px;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  height: ${(props) => sizes[props.size]};

  &:active {
    filter: brightness(80%);
  }
`;
