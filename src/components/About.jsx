import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profilePic from './profilepic.jpg'

const About = (props) => {
  return (
    <div className='about row px-4 my-5' id='about'>
  <div className='col-12 col-md-8'>
    <h2 data-aos="fade-right" data-aos-duration='1000'>About Me.</h2>
    <p data-aos="fade-right" data-aos-duration='1000'>Hey there!</p>
    <p data-aos="fade-right" data-aos-duration='1000'>
      My name is <strong>Marvellous Komolafe</strong>, and I'm a dedicated <strong>Front-end Web Developer</strong> with over 3 years of experience. I specialize in creating remarkable web applications using React.js, Tailwind CSS, Bootstrap, and Bubble.io for no-code development.
    </p>
    <p data-aos="fade-right" data-aos-duration='1000'>
      Beyond front-end development, I have a growing passion for <strong>Cybersecurity</strong>, particularly in areas like <strong>penetration testing</strong> and <strong>SOC analysis</strong>. I’m currently expanding my skills to understand how security principles integrate with modern web development.
    </p>
    <p data-aos="fade-right" data-aos-duration='1000'>
      I am passionate about transforming ideas into reality and ensuring seamless functionality. From crafting beautiful, <strong>responsive designs</strong> to implementing interactive <strong>front-end features</strong> and secure practices, I am committed to delivering top-quality work that meets your needs.
    </p>
    <p data-aos="fade-right" data-aos-duration='1000'>
      Let's collaborate and create something extraordinary together!
    </p>
  </div>
  <div className='col-12 col-md-4 d-flex justify-content-center lol' data-aos="fade-left" data-aos-duration='1000'>
    <div className='barrier' style={{ border: `2px solid ${props.border}` }}>
      <img src={profilePic} alt="Profile" />
    </div>
  </div>
</div>

  );
};

export default About;
