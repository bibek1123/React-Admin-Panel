import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>Hello Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto me-lg-3'>
            <button
              onClick={() => {
                sessionStorage.setItem('loggedIn', false);
                sessionStorage.setItem('token', '');
                window.location.reload();
              }}
              className='btn btn-danger btn-sm'
            >
              Logout
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
