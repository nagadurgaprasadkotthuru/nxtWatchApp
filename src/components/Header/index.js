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

const Header = () => (
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
        <TransparentButton>
          <FiLogOut />
        </TransparentButton>
      </NavItem>
    </NavItemsContainer>
  </NavContainer>
)

export default Header
