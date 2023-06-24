import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px 0px 20px;
  background-color: #ffffff;
`

export const TransparentContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.popup ? 'column' : 'row')};
  justify-content: space-between;
  align-items: center;
`

export const Image = styled.img`
  width: ${props => (props.profile ? '26px' : '95px')};
  height: ${props => (props.profile ? '26px' : '20px')};
  @media screen and (min-width: 576px) {
    width: ${props => (props.profile ? '28px' : '140px')};
    height: ${props => (props.profile ? '28px' : '30px')};
  }
`

export const NavItemsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0px;
`

export const NavItem = styled.li`
  list-style-type: none;
  margin-right: 8px;
  @media screen and (max-width: 768px) {
    display: ${props => props.medium && 'none'};
  }
  @media screen and (min-width: 768px) {
    display: ${props => props.small && 'none'};
  }
`

export const TransparentButton = styled.button`
  background-color: transparent;
  border: ${props => (props.outline ? '1px solid #3b82f6' : '0px')};
  font-family: 'Roboto';
  color: ${props => (props.outline ? '#3b82f6' : '#0f0f0f')};
  font-size: ${props => (props.close ? '26px' : '22px')};
  font-size: ${props => props.outline && '16px'};
  padding: ${props => props.outline && '4px 12px 4px 12px'};
  margin: ${props => props.outline && '0px 0px 4px 5px'};
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 576px) {
    font-size: ${props => (props.close ? '34px' : '26px')};
    padding-top: ${props => (props.close ? '0px' : '4px')};
    font-size: ${props => props.outline && '16px'};
  }
`

export const Description = styled.p`
  font-family: 'Roboto';
  color: #00306e;
  font-size: 18px;
  font-weight: 500;
`

export const Button = styled.button`
  font-family: 'Roboto';
  color: ${props => (props.outline ? '#7e858e' : '#ffffff')};
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  border: 1px solid ${props => (props.outline ? '#313131' : '#3b82f6')};
  border-radius: 5px;
  padding: 10px 25px 10px 25px;
  margin-right: ${props => (props.outline ? '30px' : '0px')};
  font-size: 16px;
`
