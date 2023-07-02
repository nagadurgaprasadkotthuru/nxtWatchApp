import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import NxtContext from '../../context/NxtContext'
import Header from '../Header'
import DesktopNavigation from '../DesktopNavigation'

import {
  BgContainer,
  BgContainer2,
  HomeBannerContainer,
  TransparentButton,
  TransparentContainer,
  LoaderContainer,
  FailureViewContainer,
  Image,
  Heading,
  Description,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {apiStatus: apiStatusConstants.initial, videoDetails: ''}

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const requestUrl = `https://apis.ccbp.in/videos/${id}`
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
      const videoDetails = data.video_details
      const formattedVideoDetails = {
        id: videoDetails.id,
        title: videoDetails.title,
        description: videoDetails.description,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
        thumbnailUrl: videoDetails.thumbnail_url,
        publishedAt: videoDetails.published_at,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
      }
      console.log(formattedVideoDetails)
    }
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
    return (
      <NxtContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <BgContainer>
              <Header />
              <BgContainer2>
                <DesktopNavigation />
                <HomeBannerContainer>
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

export default VideoItemDetails
