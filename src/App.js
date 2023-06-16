import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)

export default App
