import React from 'react'
import './Brain.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Brain = () => {
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
    <div className='brain'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        {/*<img src={user_4} alt="" />*/}
                        <div>
                            <h3>James</h3>
                            <span>Manic-Depressive Illness</span>
                        </div>
                    </div>
                    <p>Psychotherapy, where you meet with a mental health professional to help identify your mania triggers and talk about your condition.
                    Cognitive behavioral therapy (CBT), which can help you adjust perceptions about yourself and others. 
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        {/*<img src={user_3} alt="" />*/}
                        <div>
                            <h3>Alex</h3>
                            <span>Obsessive-Compulsive Disorder</span>
                        </div>
                        </div>
                            <p>Always expect the unexpected.Be willing to accept risk.Never seek reassurance from yourself or others.Always try hard to agree with all obsessive thoughts.
                            Don't be side-tracked by perfectionism.
                            </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        {/*<img src={user_1} alt="" />*/}
                        <div>
                            <h3>Sarah</h3>
                            <span>Panic Disorder</span>
                        </div>
                        </div>
                            <p>Cognitive behavior therapy can be used alone or in combination with antidepressants to treat patients with panic disorder. Benzodiazepines are effective in treating panic disorder symptoms, 
                            but they are less effective than antidepressants and cognitive behavior therapy.
                            </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        {/*<img src={user_2} alt="" />*/}
                        <div>
                            <h3>Gunn</h3>
                            <span>Alzheimer's Disease</span>
                        </div>
                        </div>
                            <p>
                            reading,learning foreign languages,playing musical instruments,volunteering in your local community,taking part in group sports, such as bowling
                            ,trying new activities or hobbies,maintaining an active social life 
                            </p>
                </div>
            </li>
            </ul>
      </div>
    </div>
  )
}

export default Brain
