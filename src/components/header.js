import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header () {
  return (
    <Navbar bg='white' expand='md' fixed='top'>
      <Navbar.Brand href='/'>
        <b>Camilo Ortiz</b>
      </Navbar.Brand>
      <Navbar.Toggle/>

      <Navbar.Collapse>
        <Nav>
          <Nav.Link href='/about'>
            about
          </Nav.Link>

          <Nav.Link href='/work'>
            work
          </Nav.Link>

          <Nav.Link href='/projects'>
            projects
          </Nav.Link>

          <Nav.Link href='/art'>
            generative art
          </Nav.Link>

          <Nav.Link href='/photos'>
            photography
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
