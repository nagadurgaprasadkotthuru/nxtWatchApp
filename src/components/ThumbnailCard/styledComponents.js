import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {BsDot} from 'react-icons/bs'

export const Card = styled.li`
  list-style-type: none;
  @media screen and (min-width: 576px) {
    width: 46%;
    margin: 10px 20px 20px 0px;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const Image = styled.img`
  width: ${props => (props.channelLogo ? '40px' : '100%')};
  height: ${props => props.channelLogo && '40px'};
  margin-right: ${props => props.channelLogo && '15px'};
  margin-top: ${props => props.channelLogo && '4px'};
`

export const TransparentContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.col ? 'column' : 'row')};
  flex-wrap: ${props => (props.small ? 'wrap' : 'none')};
  padding: 4px 0px 4px 0px;
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: ${props => (props.small ? '14px' : '16px')};
  margin: 0px;
  display: flex;
  align-items: center;
  color: ${props => (props.theme === 'true' ? '#0f0f0f' : '#f1f1f1')};
  @media screen and (min-width: 576px) {
    font-size: ${props => (props.small ? '16px' : '18px')};
    font-size: ${props => props.channel && '18px'};
  }
`

export const BsDotElement = styled(BsDot)`
  font-size: 20px;
  font-weight: 700;
  color: ${props => (props.theme === 'true' ? '#0f0f0f' : '#f1f1f1')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const LinkElement = styled(Link)`
  text-decoration: none;
`
