import React, {useState} from 'react'
import "./style.css"


export default function Contact() {
  const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email submitted:', email);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDownload = () => {
    const filePath = '/path/to/resume.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'resume.pdf';
    link.click();
  };



  return (
    <>
    <div className='contact-form-wrapper'>
 <form className='email-me' onSubmit={handleSubmit}>
      <div>Contact Me</div>
      <label htmlFor="email">Email:</label>
      <input className='contact-input'
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
      />
      <textarea className='contact-textarea' placeholder='yes'></textarea>
      <button className='contact-button' type="submit">Submit</button>
    </form>
    </div>
    <button onClick={handleDownload}>Download My Resume Here!</button>
    </>
  )
}
