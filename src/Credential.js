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
    token: this.props.token
  }

  render() {
    return (
      <div>
        <h2>Credential</h2>
        <p>Token: {this.props.token}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.user.token
  }
}

export default connect(mapStateToProps)(Credential)
