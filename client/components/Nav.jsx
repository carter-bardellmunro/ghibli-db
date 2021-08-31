import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <nav>
      <h1>The Studio Ghibli Collection</h1>
      <ul>
        <li><Link to="/films">Filmography</Link></li>
        <li><a href='#'>About</a></li>
      </ul>
      {/* <img src="" /> */}
    </nav>
  )
}

export default Nav
