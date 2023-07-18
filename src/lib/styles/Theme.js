import { css } from "styled-components";

const colors = {
  whiteColor: "#ffffff",
  lightGrayColor: "#dddddd",
  mediumGrayColor: "#939393",
  darkGrayColor: "#4a4a4a",
  darkColor: "#000000",

  primaryColor: "#00c177",
  secondaryColor: "#76e39d",
};

const h1box = css`
  margin: 280px 0 100px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: ${colors.darkColor};
`;

// const h1box = css`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const theme = {
  ...colors,
  h1box,
};

export default theme;
