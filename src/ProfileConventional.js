import React from 'react'

class ProfileConventional extends React.Component {
  state = {
    user: {
      name: 'Tony Stark',
      level: 1
    }
  }

  incrementLevel = () => {
    this.setState(state => {
      return {
        user: {
          ...state.user,
          level: state.user.level + 1
        }
      }
    })
  }

  decrementLevel = () => {
    this.setState(state => {
      return {
        user: {
          ...state.user,
          level: state.user.level - 1
        }
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Conventional Profile of {this.state.user.name}</h2>
        <h3>Level: {this.state.user.level}</h3>
        <button onClick={this.incrementLevel}>+</button>
        <button onClick={this.decrementLevel}>-</button>
      </div>
    )
  }
}

export default ProfileConventional
