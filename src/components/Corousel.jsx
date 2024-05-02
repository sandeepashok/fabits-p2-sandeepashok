import noteStack from "../assets/corousel/note-stack-add.svg";
import styled from "@emotion/styled/macro";
import retirement from "../assets/corousel/old.svg";
import emergency from "../assets/corousel/emergency.svg";
import wedding from "../assets/corousel/wedding.svg";
import vacation from "../assets/corousel/vacation.svg";
import left from "../assets/corousel/corousel-nav.svg";
import right from "../assets/corousel/corousel-nav2.svg";
import CorouselCard from "./CorouselCard";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useRef, useState } from "react";

const CorouselContainer = styled.div`
  height: 224px;
  min-width: 300px;
  margin: 48px 48px 24px 48px;
  padding: 16px 0;
  border-radius: 32px;
  background-color: #FFFFFF;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: 1px solid #D3DBEC;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
`
const CorouselCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  position: relative;
  margin-left: 32px;
`

const CorouselCardExtContainer = styled.div`
  height: 160px;
  width: 160px;
  margin: 16px;
  border-radius: 16px;
  cursor: pointer;
`

const CorouselInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  margin: 32px 0 0 32px;
`

const Heading = styled.b`
  width: 278px;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
`

const SubHeading = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin-top: 8px;
`

const BgImgContainer = styled.div`
  margin: 6px 0 0 30px;
`

const BgImage = styled.img`
  height: 110px;
`
const CorouselArrowContainerLeft = styled.div`
  position: absolute;
  left: 0;
  padding: 0 16px;
  margin-top: 30px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255,255,255);
  background: linear-gradient(270deg, rgb(255 255 255 / 7%) 0%, rgb(255 255 255 / 91%) 80%);
`

const CorouselArrowContainerRight = styled.div`
  position: absolute;
  right: 0;
  padding: 0 16px;
  margin-top: 30px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgb(255 255 255 / 7%) 0%, rgb(255 255 255 / 91%) 80%);
`

const CorouselArrowBtn = styled.button`
  height: 44px;
  width: 44px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

const CorouselArrow = styled.img`
  background-color: #ffffff;
  border-radius: 50%;
  height: 44px;
  width: 44px;
`

const corouselPlanCards = [
  {
    image: retirement,
    name: "Retirement",
    desc: "Your old age, taken care of"
  },
  {
    image: emergency,
    name: "Emergency",
    desc: "Be prepared at all times"
  },
  {
    image: wedding,
    name: "Wedding",
    desc: "Plan your dream wedding today"
  },
  {
    image: vacation,
    name: "Vacation",
    desc: "Never too late for the Bahamas!"
  },
  {
    image: retirement,
    name: "Education",
    desc: "Build your career, tension-free"
  },
  {
    image: retirement,
    name: "Education",
    desc: "Build your career, tension-free"
  },
  {
    image: retirement,
    name: "Education",
    desc: "Build your career, tension-free"
  },
  {
    image: retirement,
    name: "Education",
    desc: "Build your career, tension-free"
  },
  {
    image: retirement,
    name: "Education",
    desc: "Build your career, tension-free"
  },
  {
    image: retirement,
    name: "Education",
    desc: "Build your career, tension-free"
  },
  {
    image: retirement,
    name: "Education",
    desc: "Build your career, tension-free"
  },
  {
    image: retirement,
    name: "Education",
    desc: "Build your career, tension-free"
  },
  {
    image: retirement,
    name: "Education",
    desc: "Build your career, tension-free"
  },
  {
    image: retirement,
    name: "Education",
    desc: "Build your career, tension-free"
  },
]

const Corousel = () => {

  const cardContainer = useRef(null)
  const [isCorouselInfoVisible, setIsCorouselInfoVisible] = useState(true);

  useEffect(() => {
    const handleKeys = (e) => {
      if (e.key === "ArrowLeft") {
        handleLeftArrow()
      } else if (e.key === "ArrowRight") {
        handleRightArrow();
      }
    };
    document.addEventListener("keydown", handleKeys)
    return () => {
      document.addEventListener("keydown", handleKeys)
    }
  }, [])

  const handleLeftArrow = () => {
    let container = cardContainer.current
    if (container) {
      const scrollAmount = container.clientWidth;
      container.scrollTo({
        left: container.scrollLeft - scrollAmount,
        behavior: "smooth"
      });
    }
  }

  const handleRightArrow = () => {
    let container = cardContainer.current
    if (container) {
      const scrollAmount = container.clientWidth;
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
    setIsCorouselInfoVisible(false)
  }

  const handleCardClick = () => {
    setIsCorouselInfoVisible(false)
  }

  const handleScroll = () => {
    const container = cardContainer.current;
    if (container) {
      setIsCorouselInfoVisible(container.scrollLeft === 0);
    }
  }

  return (
    <CorouselContainer>
      {isCorouselInfoVisible ? <CorouselInfo>
        <Heading>What financial goal do you want to plan today?</Heading>
        <SubHeading>Select a goal to start planning</SubHeading>
        <BgImgContainer>
          <BgImage src={noteStack} alt="Note stack add" />
        </BgImgContainer>
      </CorouselInfo> : <></>}
      <CorouselCardsContainer ref={cardContainer} onScroll={handleScroll}>
        {corouselPlanCards.map(cardInfo => <CorouselCardExtContainer key={uuidv4()} onClick={handleCardClick}>
          <CorouselCard cardInfo={cardInfo} />
        </CorouselCardExtContainer>)}
      </CorouselCardsContainer>
      {isCorouselInfoVisible ? <></> : <CorouselArrowContainerLeft>
        <CorouselArrowBtn onClick={handleLeftArrow}>
          <CorouselArrow src={left} alt="Arrow left" />
        </CorouselArrowBtn>
      </CorouselArrowContainerLeft>}
      <CorouselArrowContainerRight>
        <CorouselArrowBtn onClick={handleRightArrow}>
          <CorouselArrow src={right} alt="Arrow Right" />
        </CorouselArrowBtn>
      </CorouselArrowContainerRight>
    </CorouselContainer>
  )
}

export default Corousel