import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import hero from './Hero.gif'

const Hero = (props) => {
  return (
    <div className='d-flex hero row mb-5  ' id='hero'>
      <div className='col-12 col-md-7 hero-1'  data-aos="fade-right" data-aos-duration='1000'>
        <h2 className='mb-3'>Front End Web developer</h2>
        <span className='experience px-2 rounded-pill py-1 '>
          Enhancing User Experience through seemless UI
        </span>
        <h4 className='mt-4'>Developing cutting-edge web solutions that blend creativity with functionality, providing engaging digital experiences.</h4>
        <div className='d-flex gap-4 mt-4'>
          <span style={{backgroundColor: `${props.bgcolor}`, color: `${props.color}`}} className='px-3 rounded-pill d-flex align-items-center py-2 hire'>Hire Me</span>
          <span className='px-3 rounded-pill d-flex align-items-center py-2 hire'>Projects</span>
        </div>
      </div>
      <div className=' col-12 col-md-5 heroImg d-flex justify-content-center'  data-aos="fade-left" data-aos-duration='1000'> 
        <img src={hero} alt="" className='rounded-circle'/>
      </div>
      {/* <span className='seperator mt-5'  style={{backgroundColor: `${props.bgcolor}`, color: `${props.color}`}}></span> */}
    </div>
  );
};

export default Hero;
