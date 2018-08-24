import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import registerServiceWorker from './registerServiceWorker'
import App from './App'

const render = Component => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <Component />
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
