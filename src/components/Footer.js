import React from 'react'
import { Container, Row, Col  } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer class='bg-light'>
      <Container>
        <Row>

          <Col className='text-center text-dark' id='foot'>
            Copyright &copy; 2021 D3PlayrPad
          </Col>

          <Col className='text-center text-dark' id='foot'>
            About
          </Col>

          <Col className='text-center text-dark' id='foot'>
            Terms of Service
          </Col>

          <Col className='text-center text-dark' id='foot'>
            Links
          </Col>

          <Col className='text-center text-dark' id='foot'>
            Contact Us
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
