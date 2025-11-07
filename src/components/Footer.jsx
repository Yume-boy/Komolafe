import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSquareXTwitter, FaLinkedinIn } from "react-icons/fa6";
// import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={`py-3 bg-light text-dark`} id='footer'>
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2025 Merak. All Rights Reserved.</p>
            <p className='socials'>Designed by Merak <a href="https://x.com/happyMerak" className='text-reset'><FaSquareXTwitter /></a> <a href="https://www.linkedin.com/in/marvellous-komolafe-8292821a9/" className='text-reset'><FaLinkedinIn /></a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
