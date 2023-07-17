import { css, styled } from "styled-components";

const Button = ({ children, size, color, icon, onClick }) => {
  return (
    <ButtonStyle size={size} icon={icon} color={color} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button`
  margin: 3px;
  border-radius: 25px;
  border: 1px solid #ccc;
  cursor: pointer;

  &:active {
    filter: brightness(80%);
  }

  ${(props) => {
    switch (props.size) {
      case "lg":
        return css`
          ${(props) =>
            props.color &&
            css`
              background-color: ${(props) => props.color};
              color: white;
            `}
          height: 50px;
          width: 130px;
          font-weight: 600;
        `;
      case "md":
        return css`
          ${(props) =>
            props.color &&
            css`
              background-color: ${(props) => props.color};
              color: white;
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
