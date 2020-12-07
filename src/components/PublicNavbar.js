import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
import SearchForm from "./SearchForm";

const PublicNavbar = ({
  loading,
  searchInput,
  handleSearchChange,
  handleSubmit,
}) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="ab"
      fixed="top"
      variant="dark"
    >
      <Navbar.Brand>
        <Nav.Link as={NavLink} exact={true} to="/">
          <img src={logo} alt="CoderSchool" width="200px" />
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} exact={true} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} exact={true} to="/now-playing">
            Now Playing
          </Nav.Link>
          <Nav.Link as={NavLink} exact={true} to="/top-rated">
            Top Rates
          </Nav.Link>
          <NavDropdown title="Movies Types" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">Adventure</NavDropdown.Item>
            <NavDropdown.Item href="#">Animation</NavDropdown.Item>
            <NavDropdown.Item href="#">Comedy</NavDropdown.Item>
            <NavDropdown.Item href="#">Crime</NavDropdown.Item>
            <NavDropdown.Item href="#">Drama</NavDropdown.Item>
            <NavDropdown.Item href="#">Fantasy</NavDropdown.Item>
            <NavDropdown.Item href="#">History</NavDropdown.Item>
            <NavDropdown.Item href="#">Holidays</NavDropdown.Item>
            <NavDropdown.Item href="#">Horror</NavDropdown.Item>
            <NavDropdown.Item href="#">Thriller</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <SearchForm
          loading={loading}
          searchInput={searchInput}
          handleSearchChange={handleSearchChange}
          handleSubmit={handleSubmit}
        />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PublicNavbar;
