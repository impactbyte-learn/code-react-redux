import React from 'react'
import PropTypes from 'prop-types'

class Profile extends React.Component {
  incrementLevel = () => {
    console.log('Increment Level')
  }

  decrementLevel = () => {
    console.log('Decrement Level')
  }

  render() {
    const { name, level } = this.props.user

    return (
      <div>
        <button onClick={this.incrementLevel}>+</button>
        <span>
          {name} (level {level})
        </span>
        <button onClick={this.decrementLevel}>-</button>
      </div>
    )
  }
}

Profile.propTypes = {
  name: PropTypes.string,
  level: PropTypes.number
}

export default Profile
