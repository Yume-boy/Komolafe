import React from 'react'
import Header from './Header';
import Hero from './Hero'; 
import About from './About';
import Projects from './Projects';
import Contacts from './Contacts';
import Footer from './Footer';
import Skills from './Skills';
import { useState } from 'react';

const Body = () => {

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

  return (
    <div>
      <Header colorChange={colorChange} bgcolor={changeColor} color={changeBackgroundColor} />
      <Hero bgcolor={changeColor} color={changeBackgroundColor}/>
      <About border={changeColor}/>
      <Skills bgcolor={changeColor} color={changeBackgroundColor}/>
      <Projects />
      <Contacts />
      <Footer />
    </div>
  )
}

export default Body
