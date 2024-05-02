import styled from "@emotion/styled/macro"
import Corousel from "../components/Corousel";

const HomeContainer = styled.div`
  display: flex;
  min-height: 100vh;
  max-width: calc(100vw - 301px);
  margin-left: 296px;
  flex-direction: column;
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <Corousel />
    </HomeContainer>
  )
}

export default HomePage