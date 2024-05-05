import styled from "@emotion/styled/macro"
import Corousel from "../components/corousel/Corousel";
import Plans from "../components/plans/Plans";
import { ReactComponent as InfoIcon } from "../assets/plans/info.svg"
import { ReactComponent as LeftArrow } from "../assets/navbar/chevron-left.svg"
import NavbarMobile from "../components/navbar/NavbarMobile";

const HomeContainer = styled.div`
  display: flex;
  min-height: 100vh;
  max-width: calc(100vw - 301px);
  margin-left: 296px;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-left: 0;
    max-width: max-content;
    width: 100%;
  }
`;

const InfoMessage = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12px 0 2px 0;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    & > svg {
      margin-right: 4px;
    }
  }
`
const PlanGoal = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 0 16px 16px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -4%;
    font-weight: 600;
    width: max-content;
    background-color: transparent;
    & > svg {
      padding: 6.3px 8.3px;
      font-weight: 600;
      margin-right: 4px;
    }
  }
`

const HomePage = ({ isMobileNavVisible, setIsMobileNavVisible }) => {
  return (
    <HomeContainer>
      <NavbarMobile setIsMobileNavVisible={setIsMobileNavVisible} />
      <PlanGoal><LeftArrow />Plan a Goal</PlanGoal>
      <Corousel />
      <InfoMessage><InfoIcon />Tap on a card to view more information</InfoMessage>
      <Plans />
    </HomeContainer>
  )
}

export default HomePage