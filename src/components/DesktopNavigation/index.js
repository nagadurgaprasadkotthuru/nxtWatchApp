import NxtContext from '../../context/NxtContext'

import {
  NavigationContainer,
  NavItemsContainer,
  NavItem,
  AiFillHomeIcon,
  HiFireIcon,
  SiYoutubegamingIcon,
  BiListPlusIcon,
  TransparentContainer,
  Heading,
  Image,
  Description,
} from './styledComponents'

const NavigationItemsList = [
  {
    id: 1,
    displayText: 'Home',
    Icon: AiFillHomeIcon,
  },
  {
    id: 2,
    displayText: 'Trending',
    Icon: HiFireIcon,
  },
  {
    id: 3,
    displayText: 'Gaming',
    Icon: SiYoutubegamingIcon,
  },
  {
    id: 4,
    displayText: 'Saved videos',
    Icon: BiListPlusIcon,
  },
]

const DesktopNavigation = () => (
  <NxtContext.Consumer>
    {value => {
      const {theme, activeTab, onChangeActiveTab} = value
      const renderNavigationItem = itemDetails => {
        const {id, displayText, Icon} = itemDetails
        const active = activeTab === id
        return (
          <NavItem
            key={id}
            active={active.toString()}
            onClick={onChangeActiveTab}
            value={id}
            theme={theme}
          >
            <Icon active={active.toString()} />
            {displayText}
          </NavItem>
        )
      }
      return (
        <NavigationContainer>
          <NavItemsContainer>
            {NavigationItemsList.map(eachItem =>
              renderNavigationItem(eachItem),
            )}
          </NavItemsContainer>
          <TransparentContainer>
            <Heading theme={theme}>CONTACT US</Heading>
            <TransparentContainer small>
              <Image
                alt="facebook logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              />
              <Image
                alt="twitter logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              />
              <Image
                alt="linked in logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              />
            </TransparentContainer>
            <Description theme={theme}>
              Enjoy! Now to see your channels and recommendations!
            </Description>
          </TransparentContainer>
        </NavigationContainer>
      )
    }}
  </NxtContext.Consumer>
)

export default DesktopNavigation
