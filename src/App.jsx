import React, { useState, useEffect, Suspense } from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero'; 
// import About from './components/About';
// import Projects from './components/Projects';
// import Contacts from './components/Contacts';
// import Footer from './components/Footer';
import Loading from './components/Loading';
// import { Navbar, Nav, Button } from 'react-bootstrap';
import { MdOutlineLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import Skills from './components/Skills';
// import Body from './components/Body';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true,
  easing: 'ease',
  anchorPlacement: '', 
});

const App = () => {
  // const [darkMode, setDarkMode] = useState(true);

  const [changeBackgroundColor, setChangeBackgroundColor] = useState('#000000')
  const [changeColor, setChangeColor] = useState('#f5f4f4')
  
  const Body = React.lazy(() => import('./components/Body'));
const colorChange = () => {
  if (changeBackgroundColor == '#000000' && changeColor == '#f5f4f4' ) {
    setChangeBackgroundColor('#f5f4f4')
    setChangeColor('#000000')
  } else {
    setChangeBackgroundColor('#000000')
    setChangeColor('#f5f4f4')
  }

}

// const [show, setShow] = useState('d-none d-md-none d-lg-none')


useEffect(()=>{
  document.body.style.backgroundColor = changeBackgroundColor
  document.body.style.color = changeColor
})



  return (
    <div>
      <Suspense fallback={<Loading />} >
      
      <Body />
      </Suspense>
    </div>
  );
};

export default App;
