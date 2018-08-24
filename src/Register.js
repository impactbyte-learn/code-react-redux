import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

class Register extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.any,
      message: PropTypes.string,
      dispatch: PropTypes.any
    }
  }

  register = () => {
    this.props.dispatch({ type: 'REGISTER' })
  }

  render() {
    return (
      <div>
        <h2>Register</h2>
        <input type="text" placeholder="email@example.com" />
        <input type="password" placeholder="password" />
        <button onClick={this.register}>Register</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Register)
