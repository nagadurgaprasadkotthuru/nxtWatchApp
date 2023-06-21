import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  padding: 0px;
`

export const PremiumBanner = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
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
  color: #231f20;
  border: 1px solid #231f20;
  padding: 12px 30px 12px 30px;
  font-weight: 500;
  width: fit-content;
  cursor: pointer;
  outline: none;
`

export const TransparentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  background-color: #f1f1f1;
  padding: 15px 20px 15px 20px;
`

export const Input = styled.input`
  font-family: 'Roboto';
  width: 80%;
  height: 35px;
  background-color: #ffffff;
  border: 1px solid #909090;
  padding-left: 10px;
  font-weight: 400;
`

export const SearchButton = styled.button`
  font-family: 'Roboto';
  background-color: transparent;
  border: 1px solid #909090;
  padding: 8px;
  width: 20%;
  height: 35px;
  font-size: 18px;
`
