import {formatDistanceToNow} from 'date-fns'

import NxtContext from '../../context/NxtContext'

import {
  Card,
  Image,
  TransparentContainer,
  Description,
  BsDotElement,
  LinkElement,
} from './styledComponents'

const ThumbnailCard = props => {
  const {cardDetails} = props
  const {id, title, channel, thumbnailUrl, publishedAt, viewCount} = cardDetails
  const time = formatDistanceToNow(new Date(publishedAt)).split(' ')
  const timeString = `${time[1]} ${time[2]} ago`
  return (
    <NxtContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <Card>
            <LinkElement to={`/videos/${id}`}>
              <Image alt="video thumbnail" src={thumbnailUrl} />
              <TransparentContainer>
                <Image
                  channelLogo
                  alt="channel logo"
                  src={channel.profileImageUrl}
                />
                <TransparentContainer col>
                  <Description theme={theme}>{title}</Description>
                  <TransparentContainer small>
                    <Description theme={theme} channel small>
                      {channel.name}
                      <BsDotElement theme={theme} />
                    </Description>
                    <Description theme={theme} small>
                      {viewCount}
                      <BsDotElement theme={theme} />
                      {timeString}
                    </Description>
                  </TransparentContainer>
                </TransparentContainer>
              </TransparentContainer>
            </LinkElement>
          </Card>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default ThumbnailCard
