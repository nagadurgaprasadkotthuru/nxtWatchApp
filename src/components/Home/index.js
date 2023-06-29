import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {IoIosClose} from 'react-icons/io'
import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import NxtContext from '../../context/NxtContext'
import ThumbnailCard from '../ThumbnailCard'

import {
  BgContainer,
  BgContainer2,
  HomeNavigationContainer,
  NavItemsContainer,
  NavItem,
  AiFillHomeIcon,
  HiFireIcon,
  SiYoutubegamingIcon,
  BiListPlusIcon,
  HomeBannerContainer,
  PremiumBanner,
  PremiumContainer,
  WebsiteLogo,
  TransparentButton,
  PremiumDescription,
  TransparentContainer,
  OutlineButton,
  Input,
  SearchButton,
  LoaderContainer,
  FailureViewContainer,
  Image,
  Heading,
  Description,
  RetryButton,
  VideosContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

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

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    isShowBanner: true,
    activeTab: 1,
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

  onChangeActiveTab = event => this.setState({activeTab: event.target.value})

  onClickIsShowBanner = () => this.setState({isShowBanner: false})

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <>
        {videosList.length > 0 ? (
          <VideosContainer data-testid="loader">
            {videosList.map(eachItem => (
              <ThumbnailCard cardDetails={eachItem} key={eachItem.id} />
            ))}
          </VideosContainer>
        ) : (
          <FailureViewContainer>
            <Image
              alt="no videos"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            />
            <Heading>No Search results found</Heading>
            <Description>
              Try different key words or remove search filter
            </Description>
            <RetryButton onClick={this.getVideosData}>Retry</RetryButton>
          </FailureViewContainer>
        )}
      </>
    )
  }

  renderFailureView = () => (
    <FailureViewContainer>
      <Image
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <Description>
        We are having some trouble to complete your request. Please try again.
      </Description>
      <RetryButton onClick={this.getVideosData}>Retry</RetryButton>
    </FailureViewContainer>
  )

  renderLoadingView = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

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

  renderNavigationItem = itemDetails => {
    const {id, displayText, Icon} = itemDetails
    const {activeTab} = this.state
    const active = activeTab === id
    console.log(active)
    return (
      <NavItem
        key={id}
        active={active.toString()}
        onClick={this.onChangeActiveTab}
        value={id}
      >
        <Icon active={active.toString()} />
        {displayText}
      </NavItem>
    )
  }

  render() {
    const {searchInput, isShowBanner} = this.state
    return (
      <NxtContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <BgContainer data-testid="home" theme={theme}>
              <Header />
              <BgContainer2>
                <HomeNavigationContainer>
                  <NavItemsContainer>
                    {NavigationItemsList.map(eachItem =>
                      this.renderNavigationItem(eachItem),
                    )}
                  </NavItemsContainer>
                </HomeNavigationContainer>
                <HomeBannerContainer>
                  {isShowBanner && (
                    <PremiumBanner data-testid="banner">
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
                        onClick={this.onClickIsShowBanner}
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
                    <SearchButton
                      data-testid="searchButton"
                      onClick={this.getVideosData}
                    >
                      <AiOutlineSearch />
                    </SearchButton>
                  </TransparentContainer>
                  {this.renderSwitchView()}
                </HomeBannerContainer>
              </BgContainer2>
            </BgContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Home
