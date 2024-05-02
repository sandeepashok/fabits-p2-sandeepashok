import styled from "@emotion/styled/macro"

const CorouselCardContainer = styled.div`
  height: 160px;
  width: 160px;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`

const CardInnerContainer = styled.div`
  width: 128px;
  height: 128px;
`
const PlanImg = styled.img`
  
`

const PlanName = styled.b`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  display: block;
`

const PlanDesc = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  display: block;
`
const url = "https://www.linkedin.com/in/sandeepashok"

const CorouselCard = ({ cardInfo: { image, name, desc } }) => {

  return (
    <CorouselCardContainer onClick={() => { window.open(url, '_blank') }}>
      <CardInnerContainer>
        <PlanImg src={image} />
        <PlanName>{name}</PlanName>
        <PlanDesc>{desc}</PlanDesc>
      </CardInnerContainer>
    </CorouselCardContainer>
  )
}

export default CorouselCard