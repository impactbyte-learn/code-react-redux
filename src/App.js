import React from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Header from './Header'
import ProfileConventional from './ProfileConventional'
import Profile from './Profile'
import Register from './Register'
import Login from './Login'
import Credential from './Credential'
import Message from './Message'

const initialState = {
  user: {
    name: 'Tony Stark',
    level: 1,
    gender: 'Male',
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

  case 'CHANGE_GENDER': {
    return {
      user: {
        ...state.user,
        gender: state.user.gender === 'Male' ? 'Female' : 'Male'
      }
    }
  }

  case 'REGISTER': {
    return {
      user: {
        ...state.user,
        register: action.payload.register
      },
      message: action.payload.message
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

const reduxStore = createStore(
  reducer,
  // Add Redux DevTools Extension
  // https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

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
