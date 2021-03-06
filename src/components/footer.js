import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Navbar bg='white' fixed='bottom' className='mt-4 pb-3'>
      <Nav>
        <Nav.Link href='https://www.linkedin.com/in/camilodortiz/'>linkedin</Nav.Link>

        <Nav.Link href='https://github.com/camilodoa'>github</Nav.Link>

        <Nav.Link href='https://twitter.com/camilodoa'>twitter</Nav.Link>

        <Nav.Link href='https://camilodoa.ml/resume/'>resume</Nav.Link>
        {
          // <Nav.Link><Link to="/lunarbabies" class="footer-link">lunar babies</Link></Nav.Link>
        }
      </Nav>
    </Navbar>
  )
}
