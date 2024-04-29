import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/black-arrow.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>A BETTER WORLD IS CREATED WITH BETTER MENTAL HEALTH</h1>
        <p>Our goal is to make people take better care of their mental health</p>
        <Link to='program' smooth={true} offset={-260} duration={500} className='btn'>Explore <img src={dark_arrow} alt="" /></Link>
      </div>
    </div>
  )
}

export default Hero
