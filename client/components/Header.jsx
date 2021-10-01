import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

function Header () {
  return (
    <header>
      <Link to='/'>
        <img src='images/ghibli-logo.png' className="logo-image" />
      </Link>
      <Nav />
    </header>
  )
}

export default Header
