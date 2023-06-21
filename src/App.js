import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import NxtContext from './context/NxtContext'

import Home from './components/Home'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isShowBanner: true, isShowNavigationItems: false}

  onClickIsShowBanner = () => this.setState({isShowBanner: false})

  onClickIsShowNavigationItems = () =>
    this.setState(prevState => ({
      isShowNavigationItems: !prevState.isShowNavigationItems,
    }))

  render() {
    const {isShowBanner, isShowNavigationItems} = this.state
    return (
      <NxtContext.Provider
        value={{
          isShowBanner,
          isShowNavigationItems,
          onClickIsShowBanner: this.onClickIsShowBanner,
          onClickIsShowNavigationItems: this.onClickIsShowNavigationItems,
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
