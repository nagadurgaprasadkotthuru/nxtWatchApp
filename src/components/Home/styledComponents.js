import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
`

export const PremiumBanner = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`

export const PremiumContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`

export const WebsiteLogo = styled.img`
  width: 160px;
  height: 38px;
`

export const TransparentButton = styled.button`
  background-color: transparent;
  border: 0px;
  font-family: 'Roboto';
  color: #475569;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  outline: none;
`

export const PremiumDescription = styled.p`
  font-family: 'Roboto';
  color: #1e293b;
  line-height: 1.7;
  font-weight: 400;
  font-size: 21px;
`

export const OutlineButton = styled.button`
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  padding: 12px 30px 12px 30px;
  font-weight: 500;
  width: fit-content;
  cursor: pointer;
  outline: none;
`
