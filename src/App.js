import { ThemeProvider } from "styled-components";
import GlobalStyle from "./lib/styles/GlobalStyle";
import theme from "./lib/styles/Theme";
import Router from "./shared/Router";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}
export default App;
