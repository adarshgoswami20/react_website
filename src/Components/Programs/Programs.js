import React from 'react'
import program_1 from '../../images/program-1.jpg'
import program_2 from '../../images/program-2.jpg'
import program_3 from '../../images/program-3.jpg'
import program_icon_1 from '../../images/program-icon-1.jpg'
import program_icon_2 from '../../images/program-icon-2.jpg'
import program_icon_3 from '../../images/program-icon-3.jpg'
import './Programs.css'
const Programs = () => {
  return (
    <div className='programs'>
    <div className='program'>
      <img src={program_1} alt=''/>
      <div className='caption'>
        <img src={program_icon_1} alt='' />
        <p>Graduation Degree</p>
      </div>
    </div>
    <div className='program'>
    <img src={program_2} alt=''/>
    <div className='caption'>
        <img src={program_icon_2} alt='' />
        <p>Masters Degree</p>
      </div>
  </div>
  <div className='program'>
  <img src={program_3} alt=''/>
  <div className='caption'>
        <img src={program_icon_3} alt='' />
        <p>Post Graduation</p>
      </div>
</div>
</div>
  )
}

export default Programs
