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
        <button onClick={this.incrementLevel}>+</button>
        <span>
          {user.name} (level {user.level})
        </span>
        <button onClick={this.decrementLevel}>-</button>
      </div>
    )
  }
}

export default Profile
