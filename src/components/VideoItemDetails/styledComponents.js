import styled from 'styled-components'

import ReactPlayer from 'react-player/youtube'

import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

export const BsDotElement = styled(BsDot)`
  font-size: 20px;
  font-weight: 700;
  color: ${props => (props.theme === 'true' ? '#475569' : '#94a3b8')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const BiLikeElement = styled(BiLike)`
  font-size: 24px;
  margin-right: 6px;
  color: ${props => props.like === 'true' && '#3b82f6'};
`

export const BiDislikeElement = styled(BiDislike)`
  font-size: 24px;
  margin-right: 6px;
  color: ${props => props.like === 'false' && '#3b82f6'};
`

export const BiListPlusElement = styled(BiListPlus)`
  font-size: 24px;
  margin-right: 6px;
  color: ${props => props.save === 'true' && '#3b82f6'};
`

export const BgContainer = styled.div`
  min-height: 100vh;
  padding: 0px;
  background-color: ${props =>
    props.theme === 'true' ? '#f9f9f9' : '#0f0f0f'};
`

export const BgContainer2 = styled.div`
  display: flex;
  justify-content: center;
`

export const HomeBannerContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const LoaderContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 15px 30px 15px;
  text-align: center;
`

export const Image = styled.img`
  width: ${props => (props.failure ? '300px' : '50px')};
  height: ${props => (props.failure ? '280px' : '50px')};
  margin-right: 15px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  text-align: center;
  font-size: ${props => (props.small ? '14px' : '18px')};
  font-size: ${props => props.failure && '22px'};
  font-weight: ${props => (props.small ? '400' : '500')};
  margin: 6px 0px 6px 0px;
  color: ${props => (props.theme === 'true' ? '#0f0f0f' : '#f9f9f9')};
  text-align: ${props => (props.failure ? 'center' : 'left')};
  line-height: 1.5;
`

export const SaveTextElement = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.theme === 'true' ? '#475569' : '#94a3b8')};
  color: ${props => props.save === 'true' && '#3b82f6'};
  text-align: left;
  margin: 6px 0px 6px 0px;
`

export const LikeTextElement = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.theme === 'true' ? '#475569' : '#94a3b8')};
  color: ${props => props.like === 'true' && '#3b82f6'};
  text-align: left;
  margin: 6px 0px 6px 0px;
`

export const DislikeTextElement = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.theme === 'true' ? '#475569' : '#94a3b8')};
  color: ${props => props.like === 'false' && '#3b82f6'};
  text-align: left;
  margin: 6px 0px 6px 0px;
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-size: ${props => props.failure && '20px'};
  margin: 6px 0px 6px 0px;
  color: ${props => (props.theme === 'true' ? '#475569' : '#94a3b8')};
  text-align: ${props => (props.failure ? 'center' : 'left')};
  display: ${props => (props.flex ? 'flex' : 'block')};
  line-height: 1.5;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 12px 25px 12px 25px;
  border: 0px;
  border-radius: 6px;
  font-family: 'Roboto';
  margin-top: 20px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`

export const TransparentButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0px;
  font-family: 'Roboto';
  color: #475569;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  outline: none;
  margin-right: 6px;
`

export const TransparentContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  align-items: ${props => (props.row ? 'center' : 'flex-start')};
  margin-top: 4px;
  background-color: transparent;
  padding: ${props =>
    props.inner ? '20px 20px 20px 20px' : '5px 0px 5px 0px'};
  @media screen and (min-width: 576px) {
    width: 75%;
    padding: 10px 20px 10px 20px;
  }
  @media screen and (min-width: 768px) {
    width: 55%;
    padding: 10px 20px 10px 20px;
  }
`

export const VideoPlayer = styled(ReactPlayer)`
  width: 100% !important;
  height: 250px !important;
`

export const HorizontalLine = styled.hr`
  color: #909090;
  width: 100%;
`
