

import React from 'react';
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiPhoneCall } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';


export default function header() {


  return (
<div className="header-nav-bakhour">
    <Navbar collapseOnSelect expand="lg" bg=" " variant=" ">
      <Navbar.Brand  > <img alt="logo" src='/Image/logo.jpg' className='logo' /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <p className="navbar-toggler-icon">...</p>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" >
          <Nav.Link ><NavLink exact to="/"> <a className="link5">Home</a></NavLink></Nav.Link>
          <Nav.Link ><NavLink to="/products"><a className="link5">Gallery</a></NavLink></Nav.Link>
          <Nav.Link><NavLink to="/News"><a className="link5">About Us</a></NavLink></Nav.Link>
          <Nav.Link ><NavLink to="/Events"><a className="link5">Contact</a></NavLink></Nav.Link>
 
        </Nav>
        <p className='num' > +961-76-503500 <FiPhoneCall  className="call"/></p>  
      </Navbar.Collapse>
    </Navbar>

    </div>
  );
}




