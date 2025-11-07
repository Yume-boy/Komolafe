import React from 'react'
import emailjs from '@emailjs/browser';
import Header from './Header';
import Hero from './Hero'; 
import About from './About';
import Projects from './Projects';
import Contacts from './Contacts';
import Footer from './Footer';
import Skills from './Skills';
import Seperator from './Seperator'
import { useState, useEffect, useRef } from 'react';
import Education from './Education';
import Brands from './Brands';

const Body = () => {

  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSuccess(false);
    setError(false);

    emailjs.sendForm('service_jtqniea', 'template_g78lcjs', form.current, 'v2VVd8zp5w23Rk9E0')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setError(true);
      });
  };



  const [changeBackgroundColor, setChangeBackgroundColor] = useState('#000000')
  const [changeColor, setChangeColor] = useState('#f5f4f4')

  const colorChange = () => {
    if (changeBackgroundColor == '#000000' && changeColor == '#f5f4f4' ) {
      setChangeBackgroundColor('#f5f4f4')
      setChangeColor('#000000')
    } else {
      setChangeBackgroundColor('#000000')
      setChangeColor('#f5f4f4')
    }
  
  }

  useEffect(()=>{
    document.body.style.backgroundColor = changeBackgroundColor
    document.body.style.color = changeColor
  })

  return (
    <div>
      <Header colorChange={colorChange} bgcolor={changeColor} color={changeBackgroundColor} />
      <Hero bgcolor={changeColor} color={changeBackgroundColor}/>
      <Seperator color={changeBackgroundColor}/>
      
      <About border={changeColor}/>
      <Seperator/>
      <Education />
      <Seperator/>
      <Skills bgcolor={changeColor} color={changeBackgroundColor}/>
      <Seperator/>
      <Projects />
      <Seperator/>
      <Brands />
      <Contacts sendEmail={sendEmail} yesForm={form} success={success} error={error} />
      <Footer />
    </div>
  )
}

export default Body
