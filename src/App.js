import React from 'react'
import axios from 'axios'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Message from './Message'
import ProfileConventional from './ProfileConventional'
import Profile from './Profile'
import Register from './Register'
import Login from './Login'
import Credential from './Credential'

const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  timeout: 5000,
  headers: { Authorization: '' }
})

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
    }
  }

  case 'LOGIN': {
    const response = request.post('/users/login', {
      email: action.payload.email,
      password: action.payload.password
    })
    return {
      user: {
        ...state.user,
        login: action.payload,
        token: response.token
      },
      message: response.message
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
          <hr />

          <ProfileConventional />
          <hr />

          <Profile />
          <hr />

          <Register />
          <hr />

          <Login />
          <hr />

          <Credential />
          <hr />

          <Message />
        </main>
      </Provider>
    )
  }
}

export default App
