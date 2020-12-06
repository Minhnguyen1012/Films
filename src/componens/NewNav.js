import { logDOM } from "@testing-library/react";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const NewNav = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="newnavbar"
      fixed="top"
      variant="dark"
    >
      <Navbar.Brand>
        <img src={logo} alt="CoderSchool" width="200px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} exact={true} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} exact={true} to="#">
            My Lists
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NewNav;
