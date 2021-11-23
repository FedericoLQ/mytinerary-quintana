import React from "react";
import { Navbar, Nav, Dropdown, Container } from "react-bootstrap";
import LogIcon from "../assets/logIcon.png";
import {Link} from "react-router-dom"
const NavBar = () => {
  return (
    <Navbar className="navBart" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto  navLink">
          <Dropdown>
              <Dropdown.Toggle
                className="imgLogin me-3"
                variant="success"
                id="dropdown-basic"
              >
                <img className="loginImg" src={LogIcon} alt="Img Login" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="text-center ps-0 pe-0" href="#/action-1">Sign Up</Dropdown.Item>
                <Dropdown.Item className="text-center ps-0 pe-0" href="#/action-1">Log In</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link as={Link} to="/" className="active navLinks">Home</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="/Cities" className="navLinks">Cities</Nav.Link>
            
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
