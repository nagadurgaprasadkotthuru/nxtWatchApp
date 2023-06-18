import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import NxtContext from './context/NxtContext'

import Home from './components/Home'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isShowBanner: true}

  onClickIsShowBanner = () => this.setState({isShowBanner: false})

  render() {
    const {isShowBanner} = this.state
    return (
      <NxtContext.Provider
        value={{
          isShowBanner,
          onClickIsShowBanner: this.onClickIsShowBanner,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </NxtContext.Provider>
    )
  }
}

export default App
