import React from 'react'
import "./style.css"

export default function Footer() {
  return (
    <footer>
      <div className="footerWrapper">
        <p className="footerTitle">
          <strong className='footerStrong'>Junior Full-Stack Portfolio</strong>
        </p>
      </div>
      <hr />
      <hr />
      <div className="footerLinks">
        <a className='linkContainerOne' href="https://www.linkedin.com/in/roldannavarrete/"> Linkedin</a> ||{" "}
        <a className='linkContainerTwo' href="https://github.com/roldanmoncada"> GitHub</a>
      </div>
    </footer>
  )
}
