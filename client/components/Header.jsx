import React from 'react'
// import { Link } from 'react-router-dom'
import Nav from './Nav'

function Header () {
  return (
    <header>
      <img src='images/ghibli-logo.png' className="logo-image" />
      <Nav />
    </header>

  // <div className="container">
  //   {/* <img src="https://wallpapercave.com/wp/aWaXW72.jpg" /> */}
  //   <div className="nav-header">
  //     <h1>The Studio Ghibli Collection</h1>
  //   </div>
  // </div>
  )
}

export default Header
