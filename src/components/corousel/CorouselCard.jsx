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
  transition: box-shadow 0.3s ease;
  &:hover{
    height: 159px;
    width: 159px;
    border: 1px solid #D3DBEC;
    box-shadow: 0px 4px 8px rgba(36, 47, 78, 0.12);
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
    <CorouselCardContainer>
      <CardInnerContainer>
        <PlanImg src={image} onClick={() => { window.open(url, '_blank') }} />
        <PlanName>{name}</PlanName>
        <PlanDesc>{desc}</PlanDesc>
      </CardInnerContainer>
    </CorouselCardContainer>
  )
}

export default CorouselCard