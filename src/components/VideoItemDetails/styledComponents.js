import styled from 'styled-components'

import ReactPlayer from 'react-player/youtube'

import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

export const BsDotElement = styled(BsDot)`
  font-size: 20px;
  font-weight: 700;
  color: ${props => (props.theme === 'true' ? '#0f0f0f' : '#94a3b8')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const BiLikeElement = styled(BiLike)`
  font-size: 24px;
`

export const BiDislikeElement = styled(BiDislike)`
  font-size: 24px;
`

export const BiListPlusElement = styled(BiListPlus)`
  font-size: 24px;
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
  padding-top: 30px;
`

export const Image = styled.img`
  width: 50px;
  height: 50px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  text-align: center;
  font-size: ${props => (props.small ? '14px' : '18px')};
  font-weight: ${props => (props.small ? '400' : '500')};
  margin: 6px 0px 6px 0px;
  color: ${props => (props.theme === 'true' ? '#0f0f0f' : '#f9f9f9')};
  text-align: left;
`

export const Description = styled.p`
  font-family: 'Roboto';
  text-align: center;
  font-size: ${props => (props.small ? '12px' : '16px')};
  font-weight: ${props => (props.bold ? '500' : 'normal')};
  margin: 6px 0px 6px 0px;
  color: ${props => (props.theme === 'true' ? '#475569' : '#94a3b8')};
  text-align: left;
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
  background-color: transparent;
  border: 0px;
  font-family: 'Roboto';
  color: #475569;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  outline: none;
`

export const TransparentContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  align-items: center;
  margin-top: 4px;
  background-color: transparent;
  padding: ${props =>
    props.inner ? '20px 20px 20px 20px' : '15px 0px 15px 0px'};
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
`
