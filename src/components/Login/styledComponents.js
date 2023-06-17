import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  border-radius: 10px;
  padding: 15px 30px 15px 30px;
  width: 90%;
  height: fit-content;
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
  margin-bottom: ${props => (props.id === 'checkbox' ? '0px' : '5px')};
  color: #475569;
  font-weight: 500;
`

export const Input = styled.input`
  font-family: 'Roboto';
  margin-bottom: 20px;
  height: 40px;
  border-radius: 10px;
  padding-left: 10px;
  border: 1px solid #475569;
  color: #475569;
  font-size: 16px;
  width: ${props => (props.id === 'checkbox' ? '20px' : '')};
  height: ${props => (props.id === 'checkbox' ? '20px' : '')};
`

export const Button = styled.button`
  font-family: 'Roboto';
  border: 0px;
  color: #ffffff;
  border-radius: 8px;
  padding: 10px 20px 10px 20px;
  background-color: #3b82f6;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ffob37;
  margin: 0px;
`
