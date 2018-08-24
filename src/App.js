import React from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Header from './Header'
import Message from './Message'
import ProfileConventional from './ProfileConventional'
import Profile from './Profile'
import Register from './Register'
import Login from './Login'
import Credential from './Credential'

const initialState = {
  user: {
    name: 'Tony Stark',
    level: 1,
    register: {},
    login: {},
    token: ''
  },
  message: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'INCREMENT_LEVEL': {
    return {
      user: {
        ...state.user,
        level: state.user.level + 1
      }
    }
  }

  case 'DECREMENT_LEVEL': {
    return {
      user: {
        ...state.user,
        level: state.user.level - 1
      }
    }
  }

  case 'REGISTER': {
    return {
      user: {
        ...state.user,
        register: action.payload
      }
      // message: action.payload.message
    }
  }

  case 'LOGIN': {
    return {
      user: {
        ...state.user,
        login: action.payload.login,
        token: action.payload.token
      },
      message: action.payload.message
    }
  }

  default:
    return state
  }
}

const store = createStore(reducer)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
