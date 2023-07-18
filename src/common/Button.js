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
  padding: 0 20px;
  border-radius: 25px;
  border: 0;
  font-weight: 500;
  width: fit-content;
  cursor: pointer;
  min-width: 85px;

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
        `;
      case "md":
        return css`
          ${(props) =>
            props.bgcolor &&
            css`
              background-color: ${(props) => props.bgcolor};
              color: ${(props) => props.color};
            `}
          height: 48px;
        `;
      case "sm":
        return css`
          ${(props) =>
            props.bgcolor &&
            css`
              background-color: ${(props) => props.bgcolor};
              color: ${(props) => props.color};
            `}
          height: 35px;
        `;
      default:
        return;
    }
  }}
`;
