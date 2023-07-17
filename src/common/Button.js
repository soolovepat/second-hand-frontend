import { css, styled } from "styled-components";

const Button = ({ children, size, color, bgcolor, icon, onClick }) => {
  return (
    <ButtonStyle
      size={size}
      icon={icon}
      color={color}
      bgcolor={bgcolor}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button`
  margin: 3px;
  border-radius: 25px;
  border: 0;
  cursor: pointer;

  &:active {
    filter: brightness(80%);
  }

  ${(props) => {
    switch (props.size) {
      case "lg":
        return css`
          ${(props) =>
            props.bgcolor &&
            css`
              background-color: ${(props) => props.bgcolor};
              color: ${(props) => props.color};
            `}
          height: 50px;
          width: 130px;
          font-weight: 600;
        `;
      case "md":
        return css`
          ${(props) =>
            props.bgcolor &&
            css`
              background-color: ${(props) => props.bgcolor};
              color: ${(props) => props.color};
            `}
          height: 50px;
          width: 80px;
        `;
      case "sm":
        return css`
          height: 40px;
          width: 100px;
        `;
      default:
        return;
    }
  }}
`;
