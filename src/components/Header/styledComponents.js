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

export const WebsiteLogo = styled.img`
  width: 95px;
  height: 20px;
`

export const NavItemsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0px;
`

export const NavItem = styled.li`
  list-style-type: none;
`

export const TransparentButton = styled.button`
  background-color: transparent;
  border: 0px;
  font-family: 'Roboto';
  color: #0f0f0f;
  font-size: ${props => (props.close ? '26px' : '22px')};
  width: fit-content;
  height: fit-content;
  margin-right: 6px;
  cursor: pointer;
  outline: none;
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
