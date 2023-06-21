import {Component} from 'react'

import Cookies from 'js-cookie'

import {IoIosClose} from 'react-icons/io'
import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import NxtContext from '../../context/NxtContext'

import {
  BgContainer,
  PremiumBanner,
  PremiumContainer,
  WebsiteLogo,
  TransparentButton,
  PremiumDescription,
  TransparentContainer,
  OutlineButton,
  Input,
  SearchButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    videosList: [],
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const requestUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(requestUrl, options)
    if (response.ok) {
      const data = await response.json()
      const {videos} = data
      const formattedVideosList = videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        thumbnailUrl: eachItem.thumbnail_url,
        publishedAt: eachItem.published_at,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videosList: formattedVideosList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeInput = event => this.setState({searchInput: event.target.value})

  renderSwitchView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
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
              <TransparentContainer>
                <Input
                  type="search"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.onChangeInput}
                />
                <SearchButton>
                  <AiOutlineSearch />
                </SearchButton>
              </TransparentContainer>
            </BgContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Home
