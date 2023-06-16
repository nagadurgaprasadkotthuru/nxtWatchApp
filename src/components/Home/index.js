import {IoIosClose} from 'react-icons/io'

import Header from '../Header'

import {
  BgContainer,
  PremiumBanner,
  PremiumContainer,
  WebsiteLogo,
  TransparentButton,
  PremiumDescription,
  OutlineButton,
} from './styledComponents'

const Home = () => (
  <BgContainer data-testid="home">
    <Header />
    <PremiumBanner>
      <PremiumContainer>
        <WebsiteLogo
          alt="nxt watch logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
        <PremiumDescription>
          Buy Nxt Watch Premium prepaid plans with UPI
        </PremiumDescription>
        <OutlineButton>GET IT NOW</OutlineButton>
      </PremiumContainer>
      <TransparentButton data-testid="close">
        <IoIosClose />
      </TransparentButton>
    </PremiumBanner>
  </BgContainer>
)

export default Home
