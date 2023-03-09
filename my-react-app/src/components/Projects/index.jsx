import React from 'react'
import "./style.css"
import imageOne from '../../images/joshua-reddekopp-SyYmXSDnJ54-unsplash.jpg'
import imageTwo from '../../images/oskar-yildiz-cOkpTiJMGzA-unsplash.jpg'

export default function Projects() {
  return (
    <div className='project-images'>
      <div className='project-one'>
      <img src={imageOne} alt="coding pic" />
      </div>
      <div className='project-two'>
        <img src={imageTwo} alt="anothe coding pic" />
      </div>
      
    </div>
  )
}
