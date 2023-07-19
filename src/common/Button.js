import { styled } from "styled-components";

const Button = ({
  children,
  size,
  color,
  bgcolor,
  bordercolor,
  hcolor,
  hbgcolor,
  hbordercolor,
  onClick,
}) => {
  return (
    <ButtonStyle
      size={size}
      color={color}
      bgcolor={bgcolor}
      bordercolor={bordercolor}
      hcolor={hcolor}
      hbgcolor={hbgcolor}
      hbordercolor={hbordercolor}
      onClick={onClick}
    >
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
  border: 1px solid ${(props) => props.bordercolor};
  font-weight: 500;
  width: fit-content;
  cursor: pointer;
  min-width: 85px;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  height: ${(props) => sizes[props.size]};
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid ${(props) => props.hbordercolor};
    background-color: ${(props) => props.hbgcolor};
    color: ${(props) => props.hcolor};
  }

  &:active {
    filter: brightness(80%);
  }
`;
