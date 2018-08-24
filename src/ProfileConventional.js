import React from 'react'

class ProfileConventional extends React.Component {
  state = {
    name: 'Tony Stark',
    level: 1
  }

  incrementLevel = () => {
    this.setState(state => {
      return {
        level: state.level + 1
      }
    })
  }

  decrementLevel = () => {
    this.setState(state => {
      return {
        level: state.level - 1
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Profile of {this.state.name}</h2>
        <h3>Level: {this.state.level}</h3>
        <button onClick={this.incrementLevel}>+</button>
        <button onClick={this.decrementLevel}>-</button>
      </div>
    )
  }
}

export default ProfileConventional
