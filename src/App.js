import styled from "@emotion/styled/macro";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./pages/HomePage";
import { useState } from "react";

const AppContainer = styled.div`
  display: flex;
  position: relative;
`

function App() {

  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false)

  return (
    <AppContainer>
      <NavBar isMobileNavVisible={isMobileNavVisible} setIsMobileNavVisible={setIsMobileNavVisible} />
      <HomePage isMobileNavVisible={isMobileNavVisible} setIsMobileNavVisible={setIsMobileNavVisible} />
    </AppContainer>
  );
}

export default App;
