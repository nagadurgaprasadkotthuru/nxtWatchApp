import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
`

export const PremiumBanner = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PremiumContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const WebsiteLogo = styled.img`
  width: 120px;
`

export const TransparentButton = styled.button`
  background-color: transparent;
  border: 0px;
  font-family: 'Roboto';
  color: #475569;
`

export const PremiumDescription = styled.p`
  font-family: 'Roboto';
  color: #1e293b;
`

export const OutlineButton = styled.button`
  background-color: transparent;
  font-family: 'Roboto';
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  padding: 8px 16px 8px 16px;
  font-weight: 500;
`
