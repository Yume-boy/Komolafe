import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={`py-3 bg-light text-dark`} id='footer'>
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 Merak. All Rights Reserved.</p>
            <p className='socials'>Designed by Merak <a href="https://x.com/happyMerak" className='text-reset'><FaSquareXTwitter /></a> </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
