import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

        const slider = React.useRef()
        let tx=0;
    const slideForward = () => {
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>William</h3>
                            <span>USA</span>
                        </div>
                    </div>
                    <p>I want to ensure that everyone—no matter their age, their race, religion, sexual orientation—has access for services that support their mental health. 
                    And I want to challenge other businesses and individuals to make a difference in the world by taking action to de-stigmatize mental health. 
                    We need as much help as we can possibly get developing resources and services and increasing access to those services for young people.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>John</h3>
                            <span>UK</span>
                        </div>
                        </div>
                            <p>I want to ensure that everyone—no matter their age, their race, religion, sexual orientation—has access for services that support their mental health. 
                            And I want to challenge other businesses and individuals to make a difference in the world by taking action to de-stigmatize mental health. 
                            We need as much help as we can possibly get developing resources and services and increasing access to those services for young people.
                            </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Michael</h3>
                            <span>USA</span>
                        </div>
                        </div>
                            <p>I want to ensure that everyone—no matter their age, their race, religion, sexual orientation—has access for services that support their mental health. 
                            And I want to challenge other businesses and individuals to make a difference in the world by taking action to de-stigmatize mental health. 
                            We need as much help as we can possibly get developing resources and services and increasing access to those services for young people.
                            </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>David</h3>
                            <span>UK</span>
                        </div>
                        </div>
                            <p>I want to ensure that everyone—no matter their age, their race, religion, sexual orientation—has access for services that support their mental health. 
                            And I want to challenge other businesses and individuals to make a difference in the world by taking action to de-stigmatize mental health. 
                            We need as much help as we can possibly get developing resources and services and increasing access to those services for young people.
                            </p>
                </div>
            </li>
            </ul>
      </div>
    </div>
  )
}

export default Testimonials
