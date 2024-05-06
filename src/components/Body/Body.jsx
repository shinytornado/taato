import React from 'react'
import './Body.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Body = () => {
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
    <div className='body'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        {/*<img src={user_4} alt="" />*/}
                        <div>
                            <h3>Harry</h3>
                            <span>Anxiety disorder</span>
                        </div>
                    </div>
                    <p>Some ways to manage anxiety disorders include learning about anxiety, mindfulness, relaxation techniques, 
                        correct breathing techniques, dietary adjustments, exercise, learning to be assertive, building self-esteem, 
                        cognitive therapy.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                       {/* <img src={user_2} alt="" />*/}
                        <div>
                            <h3>Josh</h3>
                            <span>Mood Disorder</span>
                        </div>
                        </div>
                            <p>Mood disorders are most often treated with medicine, psychotherapy or cognitive behavioral therapy,
                                family therapy, or a combination of medicine and therapy.
                            </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        {/*<img src={user_1} alt="" />*/}
                        <div>
                            <h3>Camila</h3>
                            <span>Pyschotic Disorder</span>
                        </div>
                        </div>
                            <p>Try to get enough sleep. Sleep can help give you the energy to cope with difficult feelings and experiences.  Think about your diet. Try to do some physical activity.
                            </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        {/*<img src={user_3} alt="" />*/}
                        <div>
                            <h3>Selena</h3>
                            <span>Eating Disorder</span>
                        </div>
                        </div>
                            <p>
                            The eating disorder recovery process is different for everyone. Before you make the decision, you may feel anxious, ashamed, or doubtful.
                            Once you make the decision to seek help and begin treatment, you will work through a process of creating new skills and overcoming old habits.
                            </p>
                </div>
            </li>
            </ul>
      </div>
    </div>
  )
}

export default Body
