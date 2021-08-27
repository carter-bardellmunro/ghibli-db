import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div className="container">
      <nav>
        <h1>The Studio Ghibli Collection</h1>
        <ul>
          <li>Filmography</li>
          <li>About</li>
        </ul>
      </nav>
      <h2>Interested in findind out more about the wonderful world of Studio Ghibli? Enter below.</h2>
      <h2><Link to="/films">Enter</Link></h2>
    </div>
  )
}

export default Home
