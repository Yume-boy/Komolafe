import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-3 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 Merak. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
