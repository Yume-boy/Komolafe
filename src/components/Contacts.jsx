import React, { useRef, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import contactImg from './contact.gif'

const Contacts = (props) => {
 

  return (
    <div className='row mx-3 d-flex align-items-center ct my-5 other' id='contact'>
      
          <h2 className="text-left mb-3" data-aos="fade-right" data-aos-duration='2000'>Contact Me.</h2>
      <div className='col-12 col-md-6 contact ' data-aos="fade-right" data-aos-duration='1000'>
        <Container id="contact" className="my-5">
          <Form ref={props.yesForm} onSubmit={props.sendEmail}>
            <Form.Group data-aos="fade-right" data-aos-duration='2000'>
              <Form.Label>Hey there! my name is</Form.Label>
              <Form.Control type="text" name="user_name" required  placeholder='Your name'/>
            </Form.Group>
            <Form.Group data-aos="fade-right" data-aos-duration='2000'>
              <Form.Label className='mt-3'>Reach me at my mail</Form.Label>
              <Form.Control type="email" name="user_email" required placeholder='Your Email'/>
            </Form.Group>
            <Form.Group data-aos="fade-right" data-aos-duration='2000'>
              <Form.Label className='mt-3'>I'll love to talk about</Form.Label>
              <Form.Control as="textarea" rows={3} name="message" required placeholder='Your message here'/>
            </Form.Group>
            <Button type="submit" className='mt-3' data-aos="fade-right" data-aos-duration='2000'>
              Send
            </Button>
          </Form>
        </Container>
      </div>
      <div className='col-6 d-none d-md-flex contactImg d-flex justify-content-center ' data-aos="fade-left" data-aos-duration='1500'>
          <img src={contactImg} alt="" />
      </div>
    </div>
  );
};

export default Contacts;
