import noteStack from "../../assets/corousel/note-stack-add.svg";
import styled from "@emotion/styled/macro";
import retirement from "../../assets/corousel/old.svg";
import emergency from "../../assets/corousel/emergency.svg";
import wedding from "../../assets/corousel/wedding.svg";
import vacation from "../../assets/corousel/vacation.svg";
import left from "../../assets/corousel/corousel-nav.svg";
import right from "../../assets/corousel/corousel-nav2.svg";
import CorouselCard from "./CorouselCard";
import { useEffect, useRef, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";

const CorouselContainer = styled.div`
  height: 224px;
  min-width: 300px;
  margin: 48px 48px 0px 48px;
  padding: 16px 0;
  border-radius: 32px;
  background-color: #FFFFFF;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: 1px solid #D3DBEC;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  @media (max-width: 768px) {
   flex-direction : column;
   height: auto;
   margin: 0;
   padding: 0;
   border-radius: 0%;
   box-shadow: none;
  }
`
const CorouselCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  position: relative;
  margin-left: 32px;
  @media (max-width: 768px) {
    margin: 0;
  }
`

const CorouselCardExtContainer = styled.div`
  height: 160px;
  width: 160px;
  margin: 16px;
  border-radius: 16px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 0px 16px 24px 16px;
  }
`

const CorouselInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  margin: 32px 0 0 32px;
  @media (max-width: 768px) {
    margin: 24px 16px;
  }
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
  @media (max-width: 768px) {
    display: none;
  }
`

const BgImage = styled.img`
  height: 110px;
`
const CorouselArrowContainerLeft = styled.div`
  display: none;

  @media (min-width: 769px) {
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
  }

`

const CorouselArrowContainerRight = styled.div`
  display: none;
  @media (min-width: 769px) {
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
  }
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
    desc: "Your old age, taken care of",
    id: 0
  },
  {
    image: emergency,
    name: "Emergency",
    desc: "Be prepared at all times",
    id: 1
  },
  {
    image: wedding,
    name: "Wedding",
    desc: "Plan your dream wedding today",
    id: 2
  },
  {
    image: vacation,
    name: "Vacation",
    desc: "Never too late for the Bahamas!",
    id: 3
  },
  {
    image: retirement,
    name: "Education",
    desc: "Build your career, tension-free",
    id: 4
  },
  {
    image: retirement,
    name: "Education",
    desc: "Build your career, tension-free",
    id: 5
  },
  {
    image: retirement,
    name: "Education",
    desc: "Build your career, tension-free",
    id: 6
  },
  {
    image: retirement,
    name: "Education",
    desc: "Build your career, tension-free",
    id: 7
  },
  {
    image: retirement,
    name: "Education",
    desc: "Build your career, tension-free",
    id: 8
  },
  {
    image: retirement,
    name: "Education",
    desc: "Build your career, tension-free",
    id: 9
  },
  {
    image: retirement,
    name: "Education",
    desc: "Build your career, tension-free",
    id: 10
  },
  {
    image: retirement,
    name: "Education",
    desc: "Build your career, tension-free",
    id: 11
  },
  {
    image: retirement,
    name: "Education",
    desc: "Build your career, tension-free",
    id: 12
  },
  {
    image: retirement,
    name: "Education",
    desc: "Build your career, tension-free",
    id: 13
  },
]

const Corousel = () => {

  const cardContainer = useRef(null)
  const [isCorouselInfoVisible, setIsCorouselInfoVisible] = useState(true);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const screenWidth = useWindowWidth();

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
      container.scrollTo({
        left: container.scrollLeft - 352,
        behavior: "smooth"
      });
      setIsCorouselInfoVisible(container.scrollLeft === 0)
    }
  }

  const handleRightArrow = () => {
    let container = cardContainer.current
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + 352,
        behavior: "smooth"
      });
    }
    setIsCorouselInfoVisible(false)
  }

  const handleCardClick = (index) => {
    if (index === 0) {
      setIsCorouselInfoVisible(!isCorouselInfoVisible)
    }
  }

  const handleScroll = () => {
    const container = cardContainer.current;
    if (container) {
      setIsCorouselInfoVisible(container.scrollLeft === 0);
    }
  }

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEndX(e.changedTouches[0].clientX);
  };

  const handleSwipe = () => {
    if (touchStartX && touchEndX) {
      const diff = touchStartX - touchEndX;
      if (diff > 0) {
        handleRightArrow();
      } else if (diff < 0) {
        handleLeftArrow();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <CorouselContainer>
      {screenWidth > 768
        ? isCorouselInfoVisible
          ? <CorouselInfo>
            <Heading>What financial goal do you want to plan today?</Heading>
            <SubHeading>Select a goal to start planning</SubHeading>
            <BgImgContainer>
              <BgImage src={noteStack} alt="Note stack add" />
            </BgImgContainer>
          </CorouselInfo>
          : null
        : <CorouselInfo>
          <Heading>What financial goal do you want to plan today?</Heading>
          <SubHeading>Select a goal to start planning</SubHeading>
          <BgImgContainer>
            <BgImage src={noteStack} alt="Note stack add" />
          </BgImgContainer>
        </CorouselInfo>}
      <CorouselCardsContainer
        ref={cardContainer}
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchEnd}
        onTouchEnd={handleSwipe}
      >
        {corouselPlanCards.map((cardInfo, i) => <CorouselCardExtContainer key={cardInfo.id} onClick={() => handleCardClick(i)}>
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