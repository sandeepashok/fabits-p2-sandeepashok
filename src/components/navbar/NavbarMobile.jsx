import styled from "@emotion/styled/macro"
import { ReactComponent as Ham } from "../../assets/navbar/ham.svg"
import { ReactComponent as Brand } from "../../assets/navbar/fabits-logo-mobile.svg"
import { ReactComponent as Bell } from "../../assets/navbar/notification-mobile.svg"
import { ReactComponent as Profile } from "../../assets/navbar/account-circle.svg"

const NavbarMobileContainer = styled.div`
  display: none;
  @media (max-width: 768px){
    display: flex;
    justify-content: space-between;
    height: 64px;
    margin-bottom: 16px;
    background-color: #FFFFFF;
  }
`
const IconsContainer = styled.div`
  margin: 20px 0 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Button = styled.div`
  height: 24px;
  width: 24px;
  background-color: transparent;
  margin: 0 16px 0 0;
`


const NavbarMobile = ({ setIsMobileNavVisible }) => {

  const handleOpenNavbar = () => {
    setIsMobileNavVisible(true)
  }

  return (
    <NavbarMobileContainer>
      <IconsContainer>
        <Button onClick={handleOpenNavbar}><Ham /></Button>
        <Brand />
      </IconsContainer>
      <IconsContainer>
        <Button><Bell /></Button>
        <Button><Profile /></Button>
      </IconsContainer>
    </NavbarMobileContainer>
  )
}

export default NavbarMobile