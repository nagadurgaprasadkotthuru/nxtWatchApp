import {IoIosClose} from 'react-icons/io'

import Header from '../Header'
import NxtContext from '../../context/NxtContext'

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
  <NxtContext.Consumer>
    {value => {
      const {isShowBanner, onClickIsShowBanner} = value
      return (
        <BgContainer data-testid="home">
          <Header />
          {isShowBanner && (
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
              <TransparentButton
                data-testid="close"
                onClick={onClickIsShowBanner}
              >
                <IoIosClose style={{width: '35px', height: '35px'}} />
              </TransparentButton>
            </PremiumBanner>
          )}
        </BgContainer>
      )
    }}
  </NxtContext.Consumer>
)

export default Home
