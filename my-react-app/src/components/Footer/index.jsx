import React from 'react'
import "./style.css"

export default function Footer() {
  return (
    <footer>
      <div className="footerWrapper">
        <p className="footerTitle">
          <strong>Junior Full-Stack Portfolio</strong> - {" "}
          <a className="footerName" href="https://github.com/roldanmoncada" target="_blank" rel="noreferrer">
            Roldan Navarrete
          </a>
        </p>
      </div>
      <hr />
      <div className="footerLinks">
        <a className='linkContainerOne' href="https://www.linkedin.com/in/roldannavarrete/"> Linkedin</a> ||{" "}
        <a className='linkContainerTwo' href="https://github.com/roldanmoncada"> GitHub</a>
      </div>
    </footer>
  )
}
