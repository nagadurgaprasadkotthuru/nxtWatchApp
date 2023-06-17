import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

import {
  NavContainer,
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
      <WebsiteLogo
        alt="nxt watch logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      />
      <NavItemsContainer>
        <NavItem>
          <TransparentButton>
            <FaMoon />
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
    </NavContainer>
  )
}

export default withRouter(Header)
