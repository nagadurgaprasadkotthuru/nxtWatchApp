import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {IoIosClose} from 'react-icons/io'
import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import NxtContext from '../../context/NxtContext'
import ThumbnailCard from '../ThumbnailCard'
import DesktopNavigation from '../DesktopNavigation'

import {
  BgContainer,
  BgContainer2,
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

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    isShowBanner: true,
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

  onClickIsShowBanner = () => this.setState({isShowBanner: false})

  renderSuccessView = theme => {
    const {videosList, isShowBanner} = this.state
    return (
      <>
        {videosList.length > 0 ? (
          <VideosContainer isShowBanner={isShowBanner.toString()}>
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
            <Heading theme={theme}>No Search results found</Heading>
            <Description theme={theme}>
              Try different key words or remove search filter
            </Description>
            <RetryButton onClick={this.getVideosData}>Retry</RetryButton>
          </FailureViewContainer>
        )}
      </>
    )
  }

  renderFailureView = theme => {
    const {isShowBanner} = this.state
    return (
      <FailureViewContainer isShowBanner={isShowBanner.toString()}>
        <Image
          alt="failure view"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        />
        <Heading theme={theme}>Oops! Something Went Wrong</Heading>
        <Description theme={theme}>
          We are having some trouble to complete your request. Please try again.
        </Description>
        <RetryButton onClick={this.getVideosData}>Retry</RetryButton>
      </FailureViewContainer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderSwitchView = theme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView(theme)
      case apiStatusConstants.failure:
        return this.renderFailureView(theme)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
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
                <DesktopNavigation />
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
                  {this.renderSwitchView(theme)}
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
