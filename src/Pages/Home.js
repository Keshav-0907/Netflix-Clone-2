import React from 'react'
import './Home.css'
import top from '../Images/Top10Badge.png'
import play from '../Images/PlayButton.png'
import list from '../Images/AddtoList.png'
import name from '../Images/MovieName.png'
import movie1 from '../Images/Movies/MoviePoster1.png'
import movie2 from '../Images/Movies/MoviePoster2.png'
import movie3 from '../Images//Movies/MoviePoster3.png'



const Home = () => {
  return (
    <div className='home-main'>
      <div className='cont'>
        <div className='head'>
          <img src={name} alt='err' />
        </div>
        <div className='top10'>
          <img src={top} alt='err' width='20px' height='20px'></img>
          <h4>Number 4 in Turkey Today</h4>
        </div>
        <div className='text'>
          <p>Emir, who learned to take care of himself at a young age and who worked hard and reached an important position in the business world, one day meets a girl who is a street singer and his life changes.</p>
        </div>
        <div className='buttons'>
          <a href='#'><img src={play} alt=''></img></a>
          <a href='#'><img src={list} alt=''></img></a>
        </div>
      </div>

      <div className='movies'>
        <div>
          <h2 className='heading'> Netflix Popular's</h2>
        </div>
        <div className='movie-popular'>
          <img className='mov' src={movie1} alt='err' />
          <img className='mov' src={movie2} alt='err' />
          <img className='mov' src={movie3} alt='err' />
          <img className='mov' src={movie2} alt='err' />
          <img className='mov' src={movie1} alt='err' />
        </div>

      </div>
    </div>
  )
}

export default Home