import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import NxtContext from './context/NxtContext'

import Home from './components/Home'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// Replace your code here
class App extends Component {
  state = {theme: false, isShowNavigationItems: false}

  onClickIsShowNavigationItems = () =>
    this.setState(prevState => ({
      isShowNavigationItems: !prevState.isShowNavigationItems,
    }))

  onChangeTheme = () =>
    this.setState(prevState => ({theme: !prevState.theme}), this.print())

  print = () => {
    const {theme} = this.state
    console.log(theme)
  }

  render() {
    const {isShowNavigationItems, theme} = this.state
    return (
      <NxtContext.Provider
        value={{
          isShowNavigationItems,
          theme,
          onChangeTheme: this.onChangeTheme,
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
