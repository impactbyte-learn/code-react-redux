import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

class Credential extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.any,
      token: PropTypes.string
    }
  }

  state = {
    message: this.props.message,
    token: this.props.token
  }

  render() {
    return (
      <div>
        <h2>Credential</h2>
        <p>Message: {this.props.message}</p>
        <p>Token: {this.props.token}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    message: state.message,
    token: state.user.token
  }
}

export default connect(mapStateToProps)(Credential)
