import styled from "@emotion/styled/macro"
import logo from "../../assets/navbar/fabits-logo.svg"
import bell from "../../assets/navbar/notifications.svg"
import profile from "../../assets/navbar/memoji.svg"
import moreIcon from "../../assets/navbar/more-vert.svg"
import { ReactComponent as Colapse } from "../../assets/navbar/collapse-content.svg"
import { ReactComponent as HomeIcon } from "../../assets/navbar/home.svg"
import { ReactComponent as PlanIcon } from "../../assets/navbar/track-changes.svg"
import { ReactComponent as DiscoverIcon } from "../../assets/navbar/bubble-chart.svg"
import { ReactComponent as InvestIcon } from "../../assets/navbar/investments.svg"
import { ReactComponent as IPOIcon } from "../../assets/navbar/add-business.svg"
import { ReactComponent as InsuranceShieldIcon } from "../../assets/navbar/insurance.svg"
import { ReactComponent as InsuranceSettingsIcon } from "../../assets/navbar/insurance-settings.svg"

const NavbarContainer = styled.div`
  min-height: 100vh;
  width: 296px;
  display: flex;
  justify-content: center;
  padding: 48px 0 32px 0;
  border-right: 1px solid #D3DBEC;
  background-color: #F4F7FE;
  position: relative;
  position: absolute;
  top: 0;
  left: 0;
;
`
const ColapseIconContainer = styled.div`
  height: 36px;
  width: 36px;
  background-color: #FFFFFF;
  border: 1px solid #D3DBEC;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 96px;
  left: 278px;
`

const ColapseIcon = styled(Colapse)`
  height: 24px;
  width: 24px;
`

const NavBarLayout = styled.div`
  height: 100%;
  min-width: 248px;
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const LogoContainer = styled.div`
  cursor: pointer;
`
const Logo = styled.img``

const NotificationContainer = styled.div`
  height: 32px;
  width: 32px;
  border: 1px solid #D3DBEC;
  display: flex;
  justify-content : center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  &:hover{
    background-color: #E7EDFC;
  }
`
const NotificationIcon = styled.img``

const ProfileContainer = styled.div`
  height: 72px;
  border-radius: 16px;
  background-color: #E7EDFC;
  margin-top: 48px;
  padding: 0 16px;
  display: flex;  
  align-items: center;
`
const ProfilePictureContainer = styled.div`
  height: 48px;
  width: 48px;
  cursor: pointer;
`

const ProfilePicture = styled.img``

const NameAndMail = styled.div`
  margin: 0 8px 0 16px;
`

const Name = styled.b`
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
`

const Email = styled.p`
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
`

const MoreOptionsIconContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  margin-top: -10px;
  justify-content: center;
  cursor: pointer;
`

const MoreOptions = styled.img`
  align-self: flex-start;
`

const NavlinksContainer = styled.div`
  margin-top: 24px;
`

const LinkContainer = styled.div`
  height: 40px;
  width: 100%;
  margin-top: 16px;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  & > div{
      & > svg{
        & > path {
            fill:#2D2D2D
        }
        & > g {
          & > path {
            fill:#2D2D2D
          }
        }
      }
    }
  &:hover{
    background-color: #E7EDFC;
    color: #41558D;
    & > div{
      & > svg{
        & > path {
            fill: #41558D;
        }
        & > g {
          & > path {
            fill: #41558D;
          }
        }
      }
    }
  }
`
const ActiveLinkContainer = styled.div`
  height: 40px;
  width: 100%;
  margin-top: 16px;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #E7EDFC;
  color: #41558D;
  cursor: pointer;
  & > div {
    & > svg {
      & > g {
        & > path {
          fill: #41558D;
        }
      }
    }
  }
`

const LinkImageContainer = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 16px;
`

const LinkName = styled.p`
  margin-left: 12px;
`

const Heading = styled.p`
  color: #6E6E6E;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  margin: 16px 0 8px 0;
`

const NavBar = () => {
  return (
    <NavbarContainer>
      <ColapseIconContainer>
        <ColapseIcon />
      </ColapseIconContainer>
      <NavBarLayout>

        <HeadingContainer>
          <LogoContainer>
            <Logo src={logo} alt="App logo" />
          </LogoContainer>
          <NotificationContainer>
            <NotificationIcon src={bell} alt="Notification icon" />
          </NotificationContainer>
        </HeadingContainer>

        <ProfileContainer>
          <ProfilePictureContainer>
            <ProfilePicture src={profile} alt="Profile picture" />
          </ProfilePictureContainer>
          <NameAndMail>
            <Name>Dhruv S.</Name>
            <Email>dhruv@fabits.com</Email>
          </NameAndMail>
          <MoreOptionsIconContainer>
            <MoreOptions src={moreIcon} alt="More options" />
          </MoreOptionsIconContainer>
        </ProfileContainer>

        <NavlinksContainer>
          <LinkContainer>
            <LinkImageContainer>
              <HomeIcon />
            </LinkImageContainer>
            <LinkName>Home</LinkName>
          </LinkContainer>

          <Heading>FINANCE</Heading>

          <ActiveLinkContainer>
            <LinkImageContainer>
              <PlanIcon />
            </LinkImageContainer>
            <LinkName>Plan a Goal</LinkName>
          </ActiveLinkContainer>
          <LinkContainer>
            <LinkImageContainer>
              <DiscoverIcon />
            </LinkImageContainer>
            <LinkName>Discover Top Funds</LinkName>
          </LinkContainer>
          <LinkContainer>
            <LinkImageContainer>
              <InvestIcon />
            </LinkImageContainer>
            <LinkName>My Investments</LinkName>
          </LinkContainer>
          <LinkContainer>
            <LinkImageContainer>
              <IPOIcon />
            </LinkImageContainer>
            <LinkName>IPO</LinkName>
          </LinkContainer>

          <Heading>INSURANCE</Heading>

          <LinkContainer>
            <LinkImageContainer>
              <InsuranceShieldIcon />
            </LinkImageContainer>
            <LinkName>Insurance</LinkName>
          </LinkContainer>
          <LinkContainer>
            <LinkImageContainer>
              <InsuranceSettingsIcon />
            </LinkImageContainer>
            <LinkName>Insurance</LinkName>
          </LinkContainer>
        </NavlinksContainer>

      </NavBarLayout>
    </NavbarContainer>
  )
}

export default NavBar