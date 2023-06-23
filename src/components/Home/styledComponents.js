import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  padding: 0px;
  background-color: #f9f9f9;
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
  background-color: transparent;
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
  outline: none;
`

export const SearchButton = styled.button`
  font-family: 'Roboto';
  background-color: #f1f1f1;
  border: 1px solid #909090;
  padding: 8px;
  width: 20%;
  height: 35px;
  font-size: 18px;
`

export const LoaderContainer = styled.div`
  min-height: 60vh;
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
  padding: 20px;
`

export const Image = styled.img`
  width: 250px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  text-align: center;
  font-size: 18px;
  margin: 6px 0px 6px 0px;
`

export const Description = styled.p`
  font-family: 'Roboto';
  text-align: center;
  font-size: 16px;
  margin: 6px 0px 6px 0px;
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

export const VideosContainer = styled.ul`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`
