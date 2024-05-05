import styled from "@emotion/styled/macro";
import { ReactComponent as Bulb } from "../../assets/plans/bulb.svg"
import { ReactComponent as Bolt } from "../../assets/plans/bolt.svg"
import vacation from "../../assets/corousel/vacation.svg"
import { useWindowWidth } from "@react-hook/window-size";

const PlanCardContainer = styled.div`
  width: 336px;
  min-height: 368px;
  border-radius: 24px;
  border: 1px solid #D3DBEC;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover{
    box-shadow: 0px 4px 8px rgba(36, 47, 78, 0.12);
  }
  @media (max-width: 768px) {
    width: 328px;
  }
`
const NameAndDpContainer = styled.div`
  display: flex;
  padding: 24px 0;
  margin: 0 24px;
  border-bottom: 1px solid #D3DBEC;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`
const DpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 71px;
  width: 71px;
  border: 1px solid #D9D9D9;
  background-color: ${({ bg }) => bg};
  border-radius: 8px;
  @media (max-width: 768px) {
    border-radius: 50%;
    height: 54px;
    width: 54px;
  }
`

const Dp = styled.img`
  height: 52px;
  width: 52px;
  border-radius: 10px;
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`
const PlanName = styled.b`
  width: 200px;
  padding-left: 16px;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -2%;
  font-weight: 600;
`
const GoalInfoContainer = styled.div`
  padding: 24px 0 12px 0;
  margin: 0 24px;
  border-bottom: 1px solid #D3DBEC;
`
const ProgressAndAmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
`
const DateAndHealthInfoContainer = styled(ProgressAndAmountContainer)``

const InfoAndHeadingContainer = styled.div`
  align-self: flex-start;
  min-width: 120px;
`

const InfoHeading = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #727272;
  text-align: left;
`
const Info = styled.b`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: #2D2D2D;
  text-align: left;
`
const HealthStatus = styled.div`
  display: flex;
`
const HealtIcon = styled.img`
  
`
const Status = styled.b`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: ${({ color }) => color};
  margin-right: 2px;
`

const StatusBarContainer = styled.div`
  margin: 24px 24px 16px 24px;
  width: 288px;
  height: 8px;
  border-radius: 100px;
  background-color: ${({ sec }) => sec};
  position: relative;
`;

const PrimaryIndicator = styled.div`
  width: ${({ width }) => width}%;
  height: 8px;
  background-color: ${({ pri }) => pri};
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Pointer = styled.img`
  position: absolute;
  z-index: 999;
  top: -10px;
  left: calc(${({ pos }) => pos}% - 10px);
`;

const SecondaryIndicator = styled.div`
  width: ${({ width }) => width}%;
  height: 8px; /* Adjust height as needed */
  border-radius: 100px;
  background: repeating-linear-gradient(
    -45deg,
    ${({ pri }) => pri} 0px,
    ${({ pri }) => pri} 2px,
    ${({ sec }) => sec} 4px,
    ${({ sec }) => sec} 8px
  );
`;

const StatusBarInfo = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  display: flex;
  margin: 0 24px;
`
const Span = styled.span`
  color: ${({ pri }) => pri};
  margin: 0 4px;
  font-weight: 600;
`
const BoostPlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px;
`

const BoostNotification = styled.div`
  background-color: #FDF7E8;
  color: ${({ pri }) => pri};
  padding: 6px 0;
  border-radius: 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600px;
`

const Notification = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 288px;
`

const BoostCta = styled.button`
  height: 40px;
  width: 288px;
  margin-top: 24px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500px;
  color: #41558D;
  background-color: white;
  cursor: pointer;
  border: 1px solid #D3DBEC;
  border-radius: 8px;
  &:hover{
    background-color: #41558D;
    color: white;
  }
  @media (max-width: 768px) {
    display: none
  }
`

const BoostMobileCta = styled.button`
height: 40px;
  width: 288px;
  margin-top: 24px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500px;
  cursor: pointer;
  border: 1px solid #D3DBEC;
  border-radius: 8px;
  background-color: #41558D;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    margin-right: 4px;
  }
  @media (min-width: 768px) {
    display: none
  }
`

const PlanCard = ({ cardData }) => {
  const {
    image, planName, goalProgress, goalAmount, goalDate, goalHealth, goalHealthIcon, reached: goalReached,
    primaryColor, secondaryColor, pointer, primaryPosition, secondaryPosition, pointerPosition, status,
    isBoostRequired
  } = cardData;

  let screenWidth = useWindowWidth()

  const splitStatus = status.split(" ").reduce((acc, word, i, arr) => {
    if (!isNaN(Number(word)) || word === "months") {
      acc.middle.push(word);
    } else if (i < arr.indexOf("months")) {
      acc.start.push(word);
    } else if (i > arr.indexOf("months")) {
      acc.end.push(word);
    }
    return acc;
  }, { start: [], middle: [], end: [] });

  let { start, middle, end } = splitStatus;

  start = start.join(" ");
  middle = middle.join(" ");
  end = end.join(" ");

  const url = "https://www.linkedin.com/in/sandeepashok"

  return (
    <PlanCardContainer onClick={() => { window.open(url, '_blank') }} >
      <NameAndDpContainer>
        <DpContainer bg={secondaryColor}>
          <Dp src={screenWidth > 768 ? image : vacation} alt="Display picture" />
        </DpContainer>
        <PlanName>{planName}</PlanName>
      </NameAndDpContainer>
      <GoalInfoContainer>
        <ProgressAndAmountContainer>
          <InfoAndHeadingContainer>
            <InfoHeading>Goal Progress</InfoHeading>
            <Info>{goalProgress}</Info>
          </InfoAndHeadingContainer>
          <InfoAndHeadingContainer>
            <InfoHeading>Goal Amount</InfoHeading>
            <Info>{goalAmount}</Info>
          </InfoAndHeadingContainer>
        </ProgressAndAmountContainer>
        <DateAndHealthInfoContainer>
          <InfoAndHeadingContainer>
            <InfoHeading>Goal Date</InfoHeading>
            <Info>{goalDate}</Info>
          </InfoAndHeadingContainer>
          {goalReached
            ? <InfoAndHeadingContainer>
              <InfoHeading>Goal Reached</InfoHeading>
              <Info>{goalDate}</Info>
            </InfoAndHeadingContainer>
            : <InfoAndHeadingContainer>
              <InfoHeading>Goal Health</InfoHeading>
              <HealthStatus>
                <HealtIcon src={goalHealthIcon} alt="Heart Icon" />
                <Status color={primaryColor}>{goalHealth}</Status>
              </HealthStatus>
            </InfoAndHeadingContainer>
          }
        </DateAndHealthInfoContainer>
      </GoalInfoContainer>
      <StatusBarContainer sec={secondaryColor}>
        <Pointer pos={pointerPosition} src={pointer} alt="Indicator" />
        <SecondaryIndicator width={secondaryPosition} pri={primaryColor} sec={secondaryColor} />
        <PrimaryIndicator width={primaryPosition} pri={primaryColor} />
      </StatusBarContainer>
      {status.includes("months")
        ? <StatusBarInfo>{start}<Span pri={primaryColor}>{middle}</Span>{end}</StatusBarInfo>
        : <StatusBarInfo>{status}</StatusBarInfo>
      }
      {
        isBoostRequired
          ? <BoostPlanContainer>
            <BoostNotification pri={primaryColor}>
              <Notification><Bulb /><Span>Boost</Span>to reach your goal sooner!</Notification>
            </BoostNotification>
            <BoostCta>Boost</BoostCta>
            <BoostMobileCta><Bolt /> Boost</BoostMobileCta>
          </BoostPlanContainer>
          : <></>
      }
    </PlanCardContainer>
  )
}

export default PlanCard