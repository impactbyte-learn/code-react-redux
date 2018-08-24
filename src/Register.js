import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

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

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        user: PropTypes.object
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
