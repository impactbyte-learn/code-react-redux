import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

class Login extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.any,
      dispatch: PropTypes.any,
      login: PropTypes.object,
      message: PropTypes.string
    }
  }

  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch({
      type: 'LOGIN',
      payload: {
        email: this.state.email,
        password: this.state.password
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Login</h2>
        <input
          name="email"
          type="text"
          placeholder="email@example.com"
          onChange={this.handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={this.handleChange}
        />
        <button type="submit">Login</button>
        <code>{JSON.stringify(this.props.login)}</code>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    login: state.user.login
  }
}

export default connect(mapStateToProps)(Login)
