import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px 10px 0px;
`

export const TransparentContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
`

export const WebsiteLogo = styled.img`
  width: 95px;
  height: 20px;
`

export const NavItemsContainer = styled.ul`
  display: flex;
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
  font-size: 20px;
  width: fit-content;
  height: fit-content;
  margin-right: 6px;
  cursor: pointer;
  outline: none;
`
