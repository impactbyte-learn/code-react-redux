import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

class Message extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.any,
      dispatch: PropTypes.any
    }
  }

  render() {
    return (
      <small>
        <code>{JSON.stringify(this.props)}</code>
      </small>
    )
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps)(Message)
