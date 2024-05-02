import styled from "@emotion/styled/macro";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

const AppContainer = styled.div`
  display: flex;
  position: relative;
`

function App() {
  return (
    <AppContainer>
      <NavBar />
      <HomePage />
    </AppContainer>
  );
}

export default App;
