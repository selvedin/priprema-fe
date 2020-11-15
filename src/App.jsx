import React from 'react'
import { Provider } from 'react-redux'
import store from './data/store'
import Register from './components/auth/Register'

const App = () => {

  return (
    <Provider store={store}>
      <Register />
    </Provider>
  )
}

export default App
