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
        <Link to='program' smooth={true} offset={-260} duration={500}>
        <button class="cssbuttons-io-button">
  Explore
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>        
        </Link>
      </div>
    </div>
  )
}

export default Hero
