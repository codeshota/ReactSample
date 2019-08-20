import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    padding: 20px 0;
    background-color: black;
    
    .navbar-brand, .nav-link {
      color: white;
      transition: color .15s ;

      &:hover {
        color: #ddd;
      }
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="#home">Sample</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Главная</Nav.Link>
          <Nav.Link href="/about">О нас</Nav.Link>
          <Nav.Link href="/contact">Контакты</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</Styles>
)