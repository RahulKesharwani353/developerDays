import React from 'react';
import logo from '../images/logo.png'

import '../App.css';
import {Navbar, Nav, Container } from 'react-bootstrap'
const NavBar = () => {
    return (
        <Container>
<Navbar collapseOnSelect expand="lg" className="NavBar">
  <Navbar.Brand href="#home"><img src={logo} alt="logo" id="navLogo"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
  
      <Nav>
      <Nav.Link href="/" active="true">Home</Nav.Link>
      <Nav.Link href="#AboutUs">About Us</Nav.Link>
      <Nav.Link href="#speakers">Speakers</Nav.Link>
      {/* <Nav.Link href="#sessions">Sessions</Nav.Link> */}
      {/* <Nav.Link href="#chalanges">Challenges</Nav.Link>
      <Nav.Link href="#Leader">LeaderBoard</Nav.Link> */}
      <Nav.Link href="#sponsors">Sponsors</Nav.Link>
      <Nav.Link  href="#Register">Register</Nav.Link>
      

    </Nav>
  </Navbar.Collapse>
</Navbar>
        </Container>
    );
};

export default NavBar;