import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import NxtContext from '../../context/NxtContext'

import {
  NavContainer,
  TransparentContainer,
  Image,
  NavItemsContainer,
  NavItem,
  TransparentButton,
  Description,
  Button,
  FaMoonIcon,
  BiSunIcon,
  GiHamburgerMenuIcon,
  FiLogOutIcon,
  AiFillHomeIcon,
  HiFireIcon,
  SiYoutubegamingIcon,
  BiListPlusIcon,
  IoCloseSharpIcon,
  LogoutButton,
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
        const {
          isShowNavigationItems,
          onClickIsShowNavigationItems,
          theme,
          onChangeTheme,
        } = value
        const imageUrl =
          theme === 'true'
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        return (
          <NavContainer theme={theme}>
            <TransparentContainer>
              <Image alt="nxt watch logo" src={imageUrl} />
              <NavItemsContainer>
                <NavItem>
                  <TransparentButton
                    data-testid="theme"
                    onClick={onChangeTheme}
                  >
                    {theme === 'true' ? (
                      <FaMoonIcon
                        theme={theme}
                        style={{padding: '0px', margin: '0px'}}
                      />
                    ) : (
                      <BiSunIcon
                        theme={theme}
                        style={{padding: '0px', margin: '0px'}}
                      />
                    )}
                  </TransparentButton>
                </NavItem>
                <NavItem small>
                  {isShowNavigationItems ? (
                    <TransparentButton
                      onClick={onClickIsShowNavigationItems}
                      close
                    >
                      <IoCloseSharpIcon theme={theme} />
                    </TransparentButton>
                  ) : (
                    <TransparentButton onClick={onClickIsShowNavigationItems}>
                      <GiHamburgerMenuIcon theme={theme} />
                    </TransparentButton>
                  )}
                </NavItem>
                <NavItem small>
                  <Popup
                    modal
                    trigger={
                      <TransparentButton>
                        <FiLogOutIcon theme={theme} />
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
                <NavItem medium>
                  <Image
                    profile="true"
                    alt="profile"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  />
                </NavItem>
                <NavItem medium>
                  <Popup
                    modal
                    trigger={
                      <LogoutButton outline theme={theme}>
                        Logout
                      </LogoutButton>
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
                    <AiFillHomeIcon theme={theme} />
                  </TransparentButton>
                </NavItem>
                <NavItem>
                  <TransparentButton onClick={onClickIsShowNavigationItems}>
                    <HiFireIcon theme={theme} />
                  </TransparentButton>
                </NavItem>
                <NavItem>
                  <TransparentButton onClick={onClickIsShowNavigationItems}>
                    <SiYoutubegamingIcon theme={theme} />
                  </TransparentButton>
                </NavItem>
                <NavItem>
                  <TransparentButton onClick={onClickIsShowNavigationItems}>
                    <BiListPlusIcon theme={theme} />
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
