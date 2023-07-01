import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.theme === 'true' ? '#f9f9f9' : '#181818'};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 15px 30px 15px 30px;
  width: 320px;
  height: fit-content;
  background-color: ${props =>
    props.theme === 'true' ? '#ffffff' : '#0f0f0f'};
`

export const WebsiteLogo = styled.img`
  width: 120px;
  align-self: center;
  margin: 20px;
  margin-bottom: 30px;
`

export const DflexContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Label = styled.label`
  font-family: 'Roboto';
  margin-bottom: ${props => (props.id === 'checkbox' ? '4px' : '5px')};
  color: ${props =>
    props.id === 'checkbox'
      ? `${props.theme === 'true' ? '#0f0f0f' : '#ffffff'}`
      : `${props.theme === 'true' ? '#616e7c' : '#ffffff'}`};
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`

export const Input = styled.input`
  font-family: 'Roboto';
  margin-bottom: ${props => (props.id === 'checkbox' ? '8px' : '15px')};
  height: 40px;
  border-radius: 8px;
  padding-left: 10px;
  border: 1px solid #616e7c;
  color: #616e7c;
  background-color: transparent;
  font-size: 16px;
  width: ${props => (props.id === 'checkbox' ? '20px' : '')};
  height: ${props => (props.id === 'checkbox' ? '20px' : '')};
  margin-right: ${props => (props.id === 'checkbox' ? '6px' : '')};
  cursor: ${props => props.id === 'checkbox' && 'pointer'};
  outline: none;
`

export const Button = styled.button`
  font-family: 'Roboto';
  border: 0px;
  color: #ffffff;
  border-radius: 8px;
  padding: 10px 20px 10px 20px;
  background-color: #3b82f6;
  height: 40px;
  cursor: pointer;
  outline: none;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
  margin: 0px;
  margin-top: 3px;
`
