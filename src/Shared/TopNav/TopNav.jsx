import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TopNav = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{"color": "#146C94"}} className='fs-2 text fw-bold'>The Italian Dishes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/" style={{"color": "#146C94"}}>Home</Nav.Link>
            <Nav.Link href="/blog" style={{"color": "#146C94"}}>Blog</Nav.Link>
           
            
          </Nav>
          <Nav>
          <Nav.Link href="/login" className='ms-auto'><Button variant="secondary">Login</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </div>
    );
};

export default TopNav;