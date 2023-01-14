import React from 'react'
import facebook from '../assets/facebook.svg'
import whats from '../assets/whats.svg'
import instagram from '../assets/instagram.svg'
import linkedIn from '../assets/linkedInd.svg'
import arrow_left from '../assets/arrow_left.svg'

const Description = () => {
  return (
    <div id='Description' key="Description">
      <marquee key="Description_marquee" behavior="smooth" direction="left"><p>👨‍💻 Think Code Scale 👩‍💻</p></marquee>
      <div className='first_parent'>
        <div className='second_parent'>
          <h1> <span>W</span>elcome to <span>IT hink</span> <br /> the <span>F</span>irst Social <span>M</span>edia <br /> Platform <span>F</span>or IT <span>C</span>ommunity  </h1>
          <div>
            <img src={facebook} alt="" />
            <img src={whats} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedIn} alt="" />
          </div>
          <h2>Contact <img src={arrow_left} alt="" /></h2>
        </div>
      </div>
    </div>
  )
}

export default Description