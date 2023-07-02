import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import NxtContext from './context/NxtContext'

import Home from './components/Home'
import Login from './components/Login'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// Replace your code here
class App extends Component {
  state = {theme: true, isShowNavigationItems: false, activeTab: 1}

  onClickIsShowNavigationItems = () =>
    this.setState(prevState => ({
      isShowNavigationItems: !prevState.isShowNavigationItems,
    }))

  onChangeTheme = () => this.setState(prevState => ({theme: !prevState.theme}))

  onChangeActiveTab = event => this.setState({activeTab: event.target.value})

  render() {
    const {isShowNavigationItems, theme, activeTab} = this.state
    console.log(theme)
    return (
      <NxtContext.Provider
        value={{
          isShowNavigationItems,
          activeTab,
          theme: theme.toString(),
          onChangeTheme: this.onChangeTheme,
          onClickIsShowNavigationItems: this.onClickIsShowNavigationItems,
          onChangeActiveTab: this.onChangeActiveTab,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
        </Switch>
      </NxtContext.Provider>
    )
  }
}

export default App
