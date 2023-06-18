import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import {
  NavContainer,
  TransparentContainer,
  WebsiteLogo,
  NavItemsContainer,
  NavItem,
  TransparentButton,
} from './styledComponents'

const Header = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <NavContainer>
      <TransparentContainer>
        <WebsiteLogo
          alt="nxt watch logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
        <NavItemsContainer>
          <NavItem>
            <TransparentButton>
              <FaMoon style={{padding: '0px', margin: '0px'}} />
            </TransparentButton>
          </NavItem>
          <NavItem>
            <TransparentButton>
              <GiHamburgerMenu />
            </TransparentButton>
          </NavItem>
          <NavItem>
            <TransparentButton onClick={onLogout}>
              <FiLogOut />
            </TransparentButton>
          </NavItem>
        </NavItemsContainer>
      </TransparentContainer>
      <NavItemsContainer>
        <NavItem>
          <TransparentButton>
            <AiFillHome />
          </TransparentButton>
          <TransparentButton>
            <HiFire />
          </TransparentButton>
          <TransparentButton>
            <SiYoutubegaming />
          </TransparentButton>
          <TransparentButton>
            <BiListPlus />
          </TransparentButton>
        </NavItem>
      </NavItemsContainer>
    </NavContainer>
  )
}

export default withRouter(Header)
