import React from 'react'
import { Nav, 
         Navbar, 
         Container } from 'react-bootstrap'
         import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      {/* <Container> */}
      <Navbar bg="light" variant='light' expand="lg" collapseOnSelect>
        <Navbar.Brand href="#home">D3PlayrPad</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="text-center">
                <Nav.Link href="#home">
                <FaHome/>
                  Home</Nav.Link>
                <Nav.Link href="#link">
                  <i className='fas fa-user'></i>
                  Sign In
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      {/* </Container> */}
    </header>
  )
}

export default Header
