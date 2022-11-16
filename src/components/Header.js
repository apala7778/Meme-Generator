import React from 'react'
import image from '../images/troll.png'

export default function Header ()  {
  return (
    <div className='header'>
        <img src={image} className='header--image' alt="u"></img>
        <h3 className='header--title'>Meme Generator </h3>
           
        <h4 className='header--project'> react project number-3</h4>


    </div>
  )
}


