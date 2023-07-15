import GlobalStyle from "./lib/styles/GlobalStyle";
import StyledApp from "./lib/styles/StyledApp";
import Router from "./shared/Router";

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Router />
    </StyledApp>
  );
}
export default App;
