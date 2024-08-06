import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero'; 
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Skills from './components/Skills';

const Body = () => {
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
