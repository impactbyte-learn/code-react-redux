import React from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Message from './Message'
import ProfileConventional from './ProfileConventional'
import Profile from './Profile'
import Register from './Register'

const initialState = {
  user: {
    name: 'Tony Stark',
    level: 1,
    token: 'abcdef'
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
      user: {
        ...state.user,
        token: 'response.token'
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
          <h1>Code React State</h1>
          <Message />
          <hr />
          <code>ProfileConventional</code>
          <ProfileConventional />
          <hr />
          <code>Profile</code>
          <Profile />
          <hr />
          <code>Register</code>
          <Register />
        </main>
      </Provider>
    )
  }
}

export default App
