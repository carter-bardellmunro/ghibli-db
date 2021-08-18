import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div>
      <h1>Studio Ghibli films</h1>
      <h2>Interested in findind out more about the wonderful world of Studio Ghibli? Enter below.</h2>
      <h2><Link to="/films">Enter</Link></h2>
    </div>
  )
}

export default Home
