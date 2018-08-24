import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker'
import App from './App'

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
  default:
    return state
  }
}

const store = createStore(reducer)

const render = Component => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

// Do this once
registerServiceWorker()

// Render once
render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}
