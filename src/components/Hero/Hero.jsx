import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/black-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>A BETTER WORLD IS CREATED WITH BETTER MENTAL HEALTH</h1>
        <p>Our goal is to make people take better care of their mental health</p>
        <button className='btn'>Explore <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
