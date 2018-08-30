import { createStore } from 'redux'

import reducer from './reducer'

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

const reduxStore = createStore(
  reducer,
  // Add Redux DevTools Extension
  // https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export { initialState, reduxStore }
