import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import axios from 'axios'

const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  timeout: 5000
})
class Register extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.any,
      dispatch: PropTypes.any,
      register: PropTypes.object
    }
  }

  state = {
    email: '',
    password: '',
    phone: ''
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

    const response = await request.post('/users/register', payload)

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        register: payload,
        message: response.data.message || ''
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Register</h2>
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
        <input
          name="phone"
          type="phone"
          placeholder="+62"
          onChange={this.handleChange}
        />
        <button type="submit">Register</button>
        <code>{JSON.stringify(this.props.register)}</code>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    register: state.user.register
  }
}

export default connect(mapStateToProps)(Register)
