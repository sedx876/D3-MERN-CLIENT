import React from 'react'
import { Container, Row, Col  } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center' id='foot'>
            Copyright &copy; 2021 D3PlayrPad
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
