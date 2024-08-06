import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import contactImg from './contact.gif'

const Contacts = ({ darkMode }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='row mx-3 d-flex align-items-center ct my-5'>
          <h2 className="text-left mb-3">Contact Me.</h2>
      <div className='col-12 col-md-6 contact '>
        <Container id="contact" className="my-5">
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group>
              <Form.Label>Hey there! my name is</Form.Label>
              <Form.Control type="text" name="user_name" required  placeholder='Your name'/>
            </Form.Group>
            <Form.Group>
              <Form.Label className='mt-3'>Reach me at my mail</Form.Label>
              <Form.Control type="email" name="user_email" required placeholder='Your Email'/>
            </Form.Group>
            <Form.Group>
              <Form.Label className='mt-3'>I'll love to talk about</Form.Label>
              <Form.Control as="textarea" rows={3} name="message" required placeholder='Your message here'/>
            </Form.Group>
            <Button variant={darkMode ? 'light' : 'dark'} type="submit" className='mt-3'>
              Send
            </Button>
          </Form>
        </Container>
      </div>
      <div className='col-6 d-none d-md-flex contactImg d-flex justify-content-center '>
          <img src={contactImg} alt="" />
      </div>
    </div>
  );
};

export default Contacts;
