import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {IoCloseSharp} from 'react-icons/io5'

import NxtContext from '../../context/NxtContext'

import {
  NavContainer,
  TransparentContainer,
  WebsiteLogo,
  NavItemsContainer,
  NavItem,
  TransparentButton,
  Description,
  Button,
} from './styledComponents'

const Header = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <NxtContext.Consumer>
      {value => {
        const {isShowNavigationItems, onClickIsShowNavigationItems} = value
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
                  {isShowNavigationItems ? (
                    <TransparentButton
                      onClick={onClickIsShowNavigationItems}
                      close
                    >
                      <IoCloseSharp />
                    </TransparentButton>
                  ) : (
                    <TransparentButton onClick={onClickIsShowNavigationItems}>
                      <GiHamburgerMenu />
                    </TransparentButton>
                  )}
                </NavItem>
                <NavItem>
                  <Popup
                    modal
                    trigger={
                      <TransparentButton>
                        <FiLogOut />
                      </TransparentButton>
                    }
                    contentStyle={{
                      borderRadius: '6px',
                      width: '300px',
                      height: '150px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    {close => (
                      <TransparentContainer popup>
                        <Description>
                          Are you sure you want to logout?
                        </Description>
                        <TransparentContainer>
                          <Button onClick={() => close()} outline>
                            Cancel
                          </Button>
                          <Button onClick={onLogout}>Confirm</Button>
                        </TransparentContainer>
                      </TransparentContainer>
                    )}
                  </Popup>
                </NavItem>
              </NavItemsContainer>
            </TransparentContainer>
            {isShowNavigationItems && (
              <NavItemsContainer>
                <NavItem>
                  <TransparentButton onClick={onClickIsShowNavigationItems}>
                    <AiFillHome />
                  </TransparentButton>
                </NavItem>
                <NavItem>
                  <TransparentButton onClick={onClickIsShowNavigationItems}>
                    <HiFire />
                  </TransparentButton>
                </NavItem>
                <NavItem>
                  <TransparentButton onClick={onClickIsShowNavigationItems}>
                    <SiYoutubegaming />
                  </TransparentButton>
                </NavItem>
                <NavItem>
                  <TransparentButton onClick={onClickIsShowNavigationItems}>
                    <BiListPlus />
                  </TransparentButton>
                </NavItem>
              </NavItemsContainer>
            )}
          </NavContainer>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default withRouter(Header)
