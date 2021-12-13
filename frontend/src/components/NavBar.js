import React from "react";
import { Navbar, Nav, Dropdown, Container } from "react-bootstrap";
import LogIcon from "../assets/logIcon.png";
import {Link} from "react-router-dom"
import userActions from "../redux/actions/userActions";
import { connect } from "react-redux";


const NavBar = (props) => {
  console.log(props.userlog);
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
                {props.userlog ? <Dropdown.Item onClick={() => props.userlogmd()} className="text-center ps-0 pe-0">Log Out</Dropdown.Item>
                :<><Dropdown.Item className="text-center ps-0 pe-0" href="/SignUp">Sign Up</Dropdown.Item>
                   <Dropdown.Item className="text-center ps-0 pe-0" href="/SignIn">Sing In</Dropdown.Item> 
                  </>
                }
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


const mapDispatchToProps = {
  userlogmd: userActions.LogOut,
};

const mapStateToProps = (state) => {
  return {
    userlog: state.userReducer.userlog
  
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);