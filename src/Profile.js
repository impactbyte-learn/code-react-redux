import React from 'react'

class Profile extends React.Component {
  incrementAge = () => {
    console.log('increment age')
  }

  decrementAge = () => {
    console.log('decrement age')
  }

  render() {
    const { name, age } = this.props.user

    return (
      <div>
        <button onClick={this.incrementAge}>+</button>
        <span>
          {name} ({age} years old)
        </span>
        <button onClick={this.decrementAge}>-</button>
      </div>
    )
  }
}

export default Profile
