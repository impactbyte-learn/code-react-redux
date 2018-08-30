import { initialState } from './store'

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

export default reducer
