import React from 'react'
import "./style.css"
import coolImage from '../../images/arnold-francisca-f77Bh3inUpE-unsplash.jpg'

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div className='about-me-pic'>
        <img src={coolImage} alt="coding picture" />
      </div>
      <div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum explicabo illum fugit culpa quia molestias vel repellendus obcaecati voluptates. Alias et error illum, veniam excepturi fuga unde fugiat dicta earum?</p>
      </div>
    </div>
  )
}
