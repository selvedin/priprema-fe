import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './data/store'
import Register from './components/auth/Register'
import Header from 'components/layout/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from 'components/layout/Dashboard'
import Login from 'components/auth/Login'
import { loadUser } from 'data/actions/auth'
import { setToken } from 'utils/setToken'
import Priprema from 'components/pripreme/Priprema'

if (localStorage.getItem('token')) {
  setToken(localStorage.getItem('token'))
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/priprema" component={Priprema} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
