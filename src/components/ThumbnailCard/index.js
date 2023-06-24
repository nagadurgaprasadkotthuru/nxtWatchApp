import {formatDistanceToNow} from 'date-fns'

import {
  Card,
  Image,
  TransparentContainer,
  Description,
  BsDotElement,
} from './styledComponents'

const ThumbnailCard = props => {
  const {cardDetails} = props
  const {title, channel, thumbnailUrl, publishedAt, viewCount} = cardDetails
  const time = formatDistanceToNow(new Date(publishedAt)).split(' ')
  const timeString = `${time[1]} ${time[2]} ago`
  return (
    <Card>
      <Image alt="video thumbnail" src={thumbnailUrl} />
      <TransparentContainer>
        <Image channelLogo alt="channel logo" src={channel.profileImageUrl} />
        <TransparentContainer col>
          <Description>{title}</Description>
          <TransparentContainer small>
            <Description channel small>
              {channel.name}
              <BsDotElement />
            </Description>
            <Description small>
              {viewCount}
              <BsDotElement />
              {timeString}
            </Description>
          </TransparentContainer>
        </TransparentContainer>
      </TransparentContainer>
    </Card>
  )
}

export default ThumbnailCard
