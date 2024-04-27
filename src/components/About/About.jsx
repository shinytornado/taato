import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>MENTAL HEALTH</h3>
        <h2>Mental Health is an important part of overall well-being</h2>
        <p>Mental health is a state of emotional, psychological, and social well-being. 
            It affects how we think, feel, and act in daily life. 
            It also helps determine how we handle stress, relate to others, and make healthy choices</p>
        <p>
            Mental health is important at every stage of life, from childhood and adolescence through adulthood.
            Over the course of your life, if you experience mental health problems, your thinking, mood, and behavior could be affected.
            Mental health benefits are numerous and include the following:
            1.Function effectively at work, school, and in our relationships.
            2.Learn and grow throughout our lives.
            3.Cope with normal stresses of life.
            4.Maintain healthy relationships with family and friends.
            5.Enjoy life to the fullest.
        </p>
      </div>
    </div>
  )
}

export default About
