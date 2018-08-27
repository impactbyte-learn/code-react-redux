import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import axios from 'axios'

const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  timeout: 5000
})

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

  handleSubmit = async event => {
    event.preventDefault()

    const payload = {
      email: this.state.email,
      password: this.state.password
    }

    const response = await request.post('/users/login', payload)

    this.props.dispatch({
      type: 'LOGIN',
      payload: {
        login: payload,
        token: response.data.token || '',
        message: response.data.message || ''
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
