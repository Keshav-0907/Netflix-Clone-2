import React from 'react'
import logo from '../Images/NetflixLogoSvg.png'
import search from '../Images/Search.png'
import gift from '../Images/GiftBox.png'
import './Navbar.css'
import bell from '../Images/NotificationBell.png'
import profile from '../Images/ProfileIMG.png'
import drop from '../Images/DownArrow.png'

const Navbar = () => {
  return (
    <div className='nav-main'>
        <div className='nav-logo'> 
            <a href='#'><img className='logo' src={logo} alt='logo'/></a>
        </div>
        <div className='nav-options'>
            <ul>
                <li>Home Page</li>
                <li>Series</li>
                <li>Movies</li>
                <li>New and Popular</li>
                <li>My List</li>
            </ul>
        </div>
        <div className='nav-links'>
            <a href='#'><img src={search} alt='search'/></a>
            <h3>CHILDREN</h3>
            <a href='#'><img src={gift} alt='gift'></img></a>
            <a href='#'><img src={bell} alt='bell'></img></a>
            <a href='#'><img src={profile} alt='profile'></img></a>
            <a href='#'><img src={drop} alt='drop'></img></a>
        </div>
    </div>
  )
}

export default Navbar