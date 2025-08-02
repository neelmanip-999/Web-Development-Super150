import React from 'react'
import GithubUser from './Components/GithubUser';
import "./App.css"

const App = () => {
  return (
    <div>
      <h1 className='app' >Github-Profiles Fetching</h1>
      <div className='parent'>
        <GithubUser username="durgeshkumargupta1210s" />
        <GithubUser username="neelmanip-999" />
        <GithubUser username="prakhar-1310" />
      </div>
    </div>
  )
}

export default App