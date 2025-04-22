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

const Body = () => {

  const form = useRef();
  const [formSucccess, setFormSuccess] = useState('d-none')
  const [formFail, setFormFail] = useState('d-none')

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gvu4kdo', 'template_g78lcjs', form.current, {
      publicKey: 'v2VVd8zp5w23Rk9E0',
    })
    .then(
      () => {
        form.current.reset();
        console.log('SUCCESS!');
        setTimeout(() => {
          setFormSuccess('d-flex')
        }, 1000)
        setTimeout(() => {
          setFormSuccess('d-none')
        }, 3000)
      },
      (error) => {
        setTimeout(() => {
          setFormFail;('d-flex')
        }, 1000)
        setTimeout(() => {
          setFormFail('d-none')
        }, 3000)
        console.log('FAILED...', error.text);
      },
    );
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
      <div className={`${formSucccess} bg-success justify-content-center  align-items-center form`}>
        <p>Form Sent Successfully</p>
      </div>
      <div className={`${formFail} bg-danger justify-content-center  align-items-center form`}>
        <p>Form could not be sent</p>
      </div>
      <Header colorChange={colorChange} bgcolor={changeColor} color={changeBackgroundColor} />
      <Hero bgcolor={changeColor} color={changeBackgroundColor}/>
      <Seperator color={changeBackgroundColor}/>
      
      <About border={changeColor}/>
      <Seperator/>
      <Skills bgcolor={changeColor} color={changeBackgroundColor}/>
      <Seperator/>
      <Projects />
      <Contacts sendEmail={sendEmail} yesForm={form}/>
      <Footer />
    </div>
  )
}

export default Body
