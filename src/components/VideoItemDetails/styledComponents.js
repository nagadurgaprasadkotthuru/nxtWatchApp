import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  padding: 0px;
  background-color: ${props =>
    props.theme === 'true' ? '#f9f9f9' : '#0f0f0f'};
`

export const BgContainer2 = styled.div`
  display: flex;
`

export const HomeBannerContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 80%;
  }
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
  padding-top: ${props => (props.isShowBanner === 'true' ? '10px' : '30px')};
`

export const Image = styled.img`
  width: 250px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  text-align: center;
  font-size: 18px;
  margin: 6px 0px 6px 0px;
  color: ${props => (props.theme === 'true' ? '#0f0f0f' : '#f9f9f9')};
`

export const Description = styled.p`
  font-family: 'Roboto';
  text-align: center;
  font-size: 16px;
  margin: 6px 0px 6px 0px;
  color: ${props => (props.theme === 'true' ? '#475569' : '#94a3b8')};
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

export const TransparentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  background-color: transparent;
  padding: 15px 20px 15px 20px;
  @media screen and (min-width: 576px) {
    width: 75%;
    padding: 10px 20px 10px 20px;
  }
  @media screen and (min-width: 768px) {
    width: 55%;
    padding: 10px 20px 10px 20px;
  }
`
