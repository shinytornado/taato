import React from 'react'
import './Heart.css'
import { useRef } from 'react'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import Title from '../Title/Title'

const Heart = ({playHea, setHea}) => {
    const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target === player.current){
            setHea(false)
        }
    }

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
    <div className={`heart ${playHea?'':'hide'}`} ref={player} onClick={closePlayer} >
        <div className="popupwindow">
        <Title subTitle='People on mental health affecting Heart' title=''/>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        {/*<img src={user_1} alt="" />*/}
                        <div>
                            <h3>Cassie</h3>
                            <span>Cardiovascular disease</span>
                        </div>
                    </div>
                    <p>Eat a healthy, balanced diet.Be more physically active.Keep to a healthy weight.Give up smoking.
                    Reduce your alcohol consumption.Keep your blood pressure under control.Keep your diabetes under control.
                    Take any prescribed medicine.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        {/*<img src={user_3} alt="" />*/}
                        <div>
                            <h3>Brooke</h3>
                            <span>Metabolic disease</span>
                        </div>
                        </div>
                            <p>Eat a heart-healthy diet . Whether your heart is still healthy or is showing signs of trouble, 
                                you can significantly reduce your risks by sticking to a Mediterranean-style diet , says Ndumele.
                                Stick to an exercise plan .Keep a healthy weight .
                            </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        {/*<img src={user_3} alt="" />*/}
                        <div>
                            <h3>Sam</h3>
                            <span>Chronic stress</span>
                        </div>
                        </div>
                            <p>Exercising.Eating healthy foods.Learning time management techniques.Setting realistic goals.
                            Getting more sleep.Making time for leisure activities.Building stress reduction skills.
                            Learning and practicing mindfulness (learning to control attention)
                            </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        {/*<img src={user_3} alt="" />*/}
                        <div>
                            <h3>Mason</h3>
                            <span>Anxiety</span>
                        </div>
                        </div>
                            <p>
                            Exercise burns up stress chemicals and promotes relaxation. Physical activity is another helpful way to manage anxiety.
                             Aim to do some physical activity at least three to four times every week, and vary your activities to avoid boredom.
                            </p>
                </div>
            </li>
            </ul>
      </div>
      </div>
    </div>
  )
}

export default Heart
