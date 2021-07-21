import React from 'react'
import { Nav, 
         Navbar, 
         Container } from 'react-bootstrap'
import { FaHome } from "react-icons/fa"
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      {/* <Container> */}
      <Navbar variant='light' bg='light'  expand="lg" collapseOnSelect>
        <LinkContainer to='/'>
          <Navbar.Brand id='logoHead'>👹D3PlayrPad</Navbar.Brand>
        </LinkContainer>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="text-center">

                <LinkContainer to='/'>
                  <Nav.Link href="#home">
                    <FaHome/>
                    Home
                  </Nav.Link>
                </LinkContainer>

                {/* <LinkContainer to='/character'>
                  <Nav.Link>
                    <FaHome/>
                    Builds
                  </Nav.Link>
                </LinkContainer> */}
                
                
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
