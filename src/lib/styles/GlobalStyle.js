import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        font-family: "Noto Sans KR", sans-serif;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    body {
      margin: 0;
      font-family: "Noto Sans KR", sans-serif, -apple-system, BlinkMacSystemFont,
        "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
        "Droid Sans", "Helvetica Neue", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

    h1 {
      font-size: 20px;
      font-weight:500;
    }

    strong {
      font-weight:700;
    }

    button {
      font-size: 16px;
      cursor: pointer;
    }

    textarea{
    }
    `;

export default GlobalStyle;
