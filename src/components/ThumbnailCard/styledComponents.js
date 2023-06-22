import styled from 'styled-components'

import {BsDot} from 'react-icons/bs'

export const Card = styled.li`
  list-style-type: none;
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
  padding: 4px 0px 4px 0px;
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: ${props => (props.small ? '14px' : '16px')};
  margin: 0px;
`

export const BsDotElement = styled(BsDot)`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
