import React, { useRef } from 'react'
import arrow_back from '../../images/arrow-back.png'
import arrow_next from '../../images/arrow-next.png'
import user_1 from '../../images/user-1.jpg'
import user_2 from '../../images/user-2.jpg'
import user_3 from '../../images/user-3.jpg'
import user_4 from '../../images/user-4.jpg'
import './Testimonials.css'
const Testimonials = () => {

  const slider = useRef();
  let tx = 0;
const slideForward = ()=>{
  if(tx > -50){
    tx -= 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
  if(tx < 0){
    tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={arrow_next} alt='' className='next-btn' onClick={slideForward}/>
      <img src={arrow_back} alt='' className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt=''/>
                <div>
                  <h3>William Jackson</h3>
                  <span>Thomas, UP</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive
                community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded
                my expectations.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt=''/>
                <div>
                  <h3>Mileva Smith</h3>
                  <span>Thomas, UP</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive
                community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded
                my expectations.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt=''/>
                <div>
                  <h3>Anjali Tripathi</h3>
                  <span>Thomas, UP</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive
                community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded
                my expectations.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt=''/>
                <div>
                  <h3>Selena Morkel</h3>
                  <span>Thomas, UP</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive
                community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded
                my expectations.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
