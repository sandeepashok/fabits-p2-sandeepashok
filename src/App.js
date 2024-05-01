import styled from "@emotion/styled/macro";
import NavBar from "./components/NavBar";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 296px auto;
`

function App() {
  return (
    <AppContainer>
      <NavBar />
    </AppContainer>
  );
}

export default App;
