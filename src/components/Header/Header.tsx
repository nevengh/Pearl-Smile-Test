import './Header.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='ne_Header'>
      <div className="logo">
        <h2>Pearl Smile</h2>
      </div>
      <div className={`ne_nav_menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="ne_nav_links">
          <Link to='/'>Home</Link>
        </div>
        <div className="ne_nav_links">
          <Link to='/about-us'>About Us</Link>
        </div>
        <div className="ne_nav_links">
          <Link to='/our-team'>Our Team</Link>
        </div>
        <div className="ne_nav_links">
          <Link to='/our-services'>Services</Link>
        </div>
        <div className="ne_nav_links">
          <Link to='/blogs'>Blogs</Link>
        </div>
        <div className="ne_nav_links">
          <Link to='/contact-us'>Contact Us</Link>
        </div>
      </div>
      <div className="language_btn">
        <select name="" id="">
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
      </div>
      <div className="burger_menu" onClick={toggleMenu}>
        {isMenuOpen ? (
          <span className="close_icon">&times;</span>
        ) : (
          <span className="burger_icon">&#9776;</span>
        )}
      </div>
    </div>
  )
}

export default Header
