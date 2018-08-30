import React from 'react'

import Header from './Header'
import ProfileConventional from './ProfileConventional'
import Profile from './Profile'
import Register from './Register'
import Login from './Login'
import Credential from './Credential'
import Message from './Message'

import { Provider } from 'react-redux'
import { reduxStore } from './redux/store'

class App extends React.Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <main>
          <Header />
          <ProfileConventional />
          <Profile />
          <Register />
          <Login />
          <Credential />
          <Message />
        </main>
      </Provider>
    )
  }
}

export default App
