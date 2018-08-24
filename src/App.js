import React from 'react'

import Profile from './Profile'

class App extends React.Component {
  state = {
    user: {
      name: 'Tony Stark',
      age: 30
    }
  }

  render() {
    return (
      <div>
        <h1>Code React State</h1>
        <Profile user={this.state.user} />
      </div>
    )
  }
}

export default App
