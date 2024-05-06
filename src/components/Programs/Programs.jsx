import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import { Link } from 'react-scroll'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
      <Link to='brain' smooth={true} offset={-260} duration={500}>
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Brain</p>
        </div>
        </Link>
      </div>
      <div className="program">
      <Link to='body' smooth={true} offset={-260} duration={500}>
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Body</p>
        </div>
        </Link>
      </div>
      <div className="program">
      <Link to='heart' smooth={true} offset={-260} duration={500}>
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Heart</p>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Programs
