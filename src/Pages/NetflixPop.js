import React from 'react'
import './NetflixPop.css'
import movie1 from '../Images/Movies/MoviePoster1.png'
import om1 from '../Images/Movies/Originals/MoviePoster1.png'
import om2 from '../Images/Movies/Originals/MoviePoster2.png'
import om3 from '../Images/Movies/Originals/MoviePoster3.png'
import om4 from '../Images/Movies/Originals/MoviePoster4.png'
import om5 from '../Images/Movies/Originals/MoviePoster5.png'
import categoty from '../Images/CategoryLine.png'


const NetflixPop = () => {
  return (
    <>
      <div className='nf-pop'>
        <div className='nf-og'>
          <h3>Netflix Original Content</h3>
        </div>
        <div className='original-movie'>
          <img src={om1} alt='err'></img>
          <img src={om2} alt='err'></img>
          <img src={om3} alt='err'></img>
          <img src={om4} alt='err'></img>
          <img src={om2} alt='err'></img>
        </div>
      </div>

    </>
  )
}

export default NetflixPop