import React from 'react';
import logo from '../assets/images/logo.png'

import '../App.css';
import {Navbar, Nav, Container,NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <Container>
<Navbar collapseOnSelect expand="lg" className="NavBar">
  <Navbar.Brand href="/"><img src={logo} alt="logo" id="navLogo"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
  
      <Nav>
      <Nav.Link  active="true" >
        <Link to="/" className="nav-item">Home</Link>
        {/* Use Link inside Navbar */}
      </Nav.Link>
      {/* <Nav.Link href="/home">About Us</Nav.Link> */}
     
      <NavDropdown title="About Tracks" id="collasible-nav-dropdown">
        <NavDropdown.Item  href="/track/0">Web Development</NavDropdown.Item>
        <NavDropdown.Item href="/track/1">UI/UX Designing</NavDropdown.Item>
        <NavDropdown.Item href="/track/2">Android Development</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
      <Nav.Link href="/home#Swags">Swags</Nav.Link>
      {/* <Nav.Link href="#sessions">Sessions</Nav.Link> */}
      {/* <Nav.Link href="#chalanges">Challenges</Nav.Link>
      <Nav.Link href="#Leader">LeaderBoard</Nav.Link> */}
      <Nav.Link href="/home#sponsors">Sponsors</Nav.Link>
      <Nav.Link href="https://developerdays.devfolio.co/" target="_blank" className="nav-item" >
     Register</Nav.Link>
      

    </Nav>
  </Navbar.Collapse>
</Navbar>
        </Container>
    );
};

export default NavBar;