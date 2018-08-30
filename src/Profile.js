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
    const action = { type: 'INCREMENT_LEVEL' }
    this.props.dispatch(action)
  }

  decrementLevel = () => {
    this.props.dispatch({ type: 'DECREMENT_LEVEL' })
  }

  changeGender = () => {
    this.props.dispatch({ type: 'CHANGE_GENDER' })
  }

  render() {
    return (
      <div>
        <h2>Profile of {this.props.user.name}</h2>
        <h3>Level: {this.props.user.level}</h3>
        <h4>Gender: {this.props.user.gender}</h4>
        <p>
          <button onClick={this.changeGender}>Change Gender</button>
          <button onClick={this.incrementLevel}>+</button>
          <button onClick={this.decrementLevel}>-</button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user
  }
}

export default connect(mapStateToProps)(Profile)
