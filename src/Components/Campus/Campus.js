import React from 'react'
import arrow from '../../images/arrow.svg'
import gallery_1 from '../../images/gallery-1.jpg'
import gallery_2 from '../../images/gallery-2.jpg'
import gallery_3 from '../../images/gallery-3.jpg'
import gallery_4 from '../../images/gallery-4.jpg'
import './Campus.css'
const Campus = () => {
  return (
    <div className='campus'>
      <div className='gallery'>
      <img src={gallery_1} alt=''/>
      <img src={gallery_2} alt=''/>
      <img src={gallery_3} alt=''/>
      <img src={gallery_4} alt=''/>
      </div>
      <button className='btn dark-btn'>See more here <img src={arrow} alt=''/></button>
    </div>
  )
}

export default Campus
