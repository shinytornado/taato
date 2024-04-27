import React, { useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

  const [sticky, setSticky] = React.useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    })
  }, [])

  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li><button className='btn'>Socials</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
