import React from 'react'
import "./style.css"
import portfolioPic from '../../images/portfolioPic.png'

export default function About() {
  return (
    <div>
      <div className="aboutWrapper">
        <div className="paragraph">
          <article>
            <h1>About Me</h1>
            <img src={portfolioPic} alt="portfolio-pic" />
            <blockquote>
              Hello! My name is Roldan Navarrete and I live in Salt Lake City, Utah. I moved here from Iowa City, Iowa in July of 2021. Hard to believe it's been nearly two years, but it has been a blast all around. Prior to this bootcamp, I achieved my degree in Entrepreneurial Business from the University of Iowa. Previous roles include loan officer, nursing assistant, and nurse recruiter. Currently, I am a technical recruiter for Kforce Professional Staffing which is what inspired me to take this bootcamp! Since the beginning of this cohort, I have devoted myself to learning more and more about the skills and tools I seek in candidates so that I am able to carry a conversation with and relate better to prospective consultants. I have also been very drawn to technology my whole life and this bootcamp was definitely something that younger me would have been *stoked* to learn that I completed. I look forward to finetuning my skills and learning different languages and tools/softwares. The sky is the limit and it will be a blast to explore everything.
            </blockquote>
            
            <p >Thank you again for visiting my portfolio!</p>
          </article>
        </div>
      </div>
    </div>
  )
}
