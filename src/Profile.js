import React from 'react'
import PropTypes from 'prop-types'

class Profile extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.any,
      name: PropTypes.string,
      level: PropTypes.number
    }
  }

  incrementLevel = () => {
    console.log('Increment Level')
  }

  decrementLevel = () => {
    console.log('Decrement Level')
  }

  render() {
    const { user } = this.props

    return (
      <div>
        <h2>Profile of {user.name}</h2>
        <h3>Level: {user.level}</h3>
        <button onClick={this.incrementLevel}>+</button>
        <button onClick={this.decrementLevel}>-</button>
      </div>
    )
  }
}

export default Profile
