import React from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

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
    token: '...'
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'INCREMENT_LEVEL':
    return {
      user: {
        ...state.user,
        level: state.user.level + 1
      }
    }
  case 'DECREMENT_LEVEL':
    return {
      user: {
        ...state.user,
        level: state.user.level - 1
      }
    }
  case 'REGISTER':
    return {
      ...state,
      register: action.payload
    }
  case 'LOGIN':
    return {
      ...state,
      login: action.payload
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
          <h1>Code React State</h1>
          <hr />

          <code>ProfileConventional</code>
          <ProfileConventional />
          <hr />

          <code>Profile</code>
          <Profile />
          <hr />

          <code>Register</code>
          <Register />
          <hr />

          <code>Login</code>
          <Login />
          <hr />

          <code>Credential</code>
          <Credential />
          <hr />

          <Message />
        </main>
      </Provider>
    )
  }
}

export default App
