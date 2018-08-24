import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

class Profile extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.any,
      user: PropTypes.object,
      dispatch: PropTypes.any
    }
  }

  incrementLevel = () => {
    this.props.dispatch({ type: 'INCREMENT_LEVEL' })
  }

  decrementLevel = () => {
    this.props.dispatch({ type: 'DECREMENT_LEVEL' })
  }

  render() {
    return (
      <div>
        <h2>Profile of {this.props.user.name}</h2>
        <h3>Level: {this.props.user.level}</h3>
        <button onClick={this.incrementLevel}>+</button>
        <button onClick={this.decrementLevel}>-</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
