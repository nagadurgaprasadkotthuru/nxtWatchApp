import styled from 'styled-components'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

export const AiFillHomeIcon = styled(AiFillHome)`
  color: ${props => props.active === 'true' && '#ff0b37'};
  margin-right: 15px;
`

export const HiFireIcon = styled(HiFire)`
  color: ${props => props.active === 'true' && '#ff0b37'};
  margin-right: 15px;
`

export const SiYoutubegamingIcon = styled(SiYoutubegaming)`
  color: ${props => props.active === 'true' && '#ff0b37'};
  margin-right: 15px;
`

export const BiListPlusIcon = styled(BiListPlus)`
  color: ${props => props.active === 'true' && '#ff0b37'};
  margin-right: 15px;
`

export const NavigationContainer = styled.div`
  width: 20%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`

export const NavItem = styled.li`
  list-style-type: none;
  margin: 6px 0px 6px 0px;
  padding: 6px 10px 6px 10px;
  display: flex;
  align-items: center;
  color: ${props => (props.theme === 'true' ? '#0f0f0f' : '#ffffff')};
  background-color: ${props =>
    props.active === 'true' &&
    (props.theme === 'true' ? '#e2e8f0' : '#313131')};
  font-weight: ${props => props.active === 'true' && '500'};
  font-family: 'Roboto';
  font-size: 14px;
  cursor: pointer;
  outline: none;
`

export const TransparentContainer = styled.div`
  padding: ${props => (props.small ? '0px' : '20px 20px 0px 20px')};
`

export const Heading = styled.h4`
  font-family: 'Roboto';
  color: ${props => (props.theme === 'true' ? '#0f0f0f' : '#f9f9f9')};
  margin-bottom: 18px;
`

export const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

export const Description = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.theme === 'true' ? '#0f0f0f' : '#f9f9f9')};
  font-size: 16px;
  margin-top: 15px 0px 3px 0px;
  line-height: 1.5;
  font-weight: 500;
`
