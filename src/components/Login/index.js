import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import NxtContext from '../../context/NxtContext'

import {
  BgContainer,
  Form,
  WebsiteLogo,
  DflexContainer,
  Label,
  Input,
  Button,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isShowErrorMsg: false,
    errorMsg: '',
    isShowPassword: false,
  }

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onClickCheckbox = () =>
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 20})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.setState({isShowErrorMsg: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {
      username,
      password,
      isShowPassword,
      isShowErrorMsg,
      errorMsg,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtContext.Consumer>
        {value => {
          const {theme} = value
          const imageUrl =
            theme === 'true'
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          return (
            <BgContainer theme={theme}>
              <Form theme={theme} onSubmit={this.onSubmitForm}>
                <WebsiteLogo alt="nxt watch logo" src={imageUrl} />
                <Label theme={theme} htmlFor="username">
                  USERNAME
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={this.onChangeUsername}
                />
                <Label theme={theme} htmlFor="password">
                  PASSWORD
                </Label>
                <Input
                  id="password"
                  type={isShowPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={this.onChangePassword}
                />
                <DflexContainer>
                  <Input
                    id="checkbox"
                    type="checkbox"
                    onChange={this.onClickCheckbox}
                    checked={isShowPassword}
                  />
                  <Label theme={theme} id="checkbox" htmlFor="checkbox">
                    Show Password
                  </Label>
                </DflexContainer>
                <Button type="submit">Login</Button>
                {isShowErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
              </Form>
            </BgContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Login
