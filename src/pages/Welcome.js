import React from 'react'
import { Route } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Route path='/welcome/new-user'>
        <p>Welcome, new user!</p>
      </Route>
    </div>
  )
}

export default Welcome
