import React from 'react'

import Profile from './Profile'
import ProfileConventional from './ProfileConventional'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Code React State</h1>
        <hr />
        <code>Profile</code>
        <Profile />
        <hr />
        <code>ProfileConventional</code>
        <ProfileConventional />
      </div>
    )
  }
}

export default App
