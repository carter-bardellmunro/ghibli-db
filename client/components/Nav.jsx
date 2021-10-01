import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// react-Icons Import
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

function Nav () {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }
  return (
    <nav className="nav">
      {open && <div className="nav-menu-toggle">
        {/* <div className="nav-header">
          <h1>The Studio Ghibli Collection</h1>
        </div> */}
        <Link to="/" className='nav-link' onClick={toggleMenu}>Home</Link>
        <Link to="/films" className='nav-link' onClick={toggleMenu}>Filmography</Link>
        <Link to href='#' className='nav-link' onClick={toggleMenu}>About</Link>
        <div className="close-hamburger" onClick={toggleMenu}><IoClose/></div>
      </div>
      }
      {!open && <div className="nav-menu">
        {/* <div className="nav-header">
          <h1>The Studio Ghibli Collection</h1>
        </div> */}
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/films" className='nav-link'>Filmography</Link>
        <Link to href='#' className='nav-link'>About</Link>
        <div className="hamburger" onClick={toggleMenu}><GiHamburgerMenu/></div>
      </div>
      }
    </nav>
  )
}

export default Nav
