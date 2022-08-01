import React from 'react'
import Image from 'next/image'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import logo from '../images/logo.png' // relative path to image 
//import logo from "../images/logo.png";
function Header() {
  return (
    <div>
        <div className="whipflip-fluid">
            <Navbar expand="lg" className="whipflip_nav">
                <Navbar.Brand href="#home">                   
                    <Image src="/images/logo.png" alt="Vercel Logo" width={275} height={50} />
                    {/* <img src="/images/logo.png" alt="" /> */}
                    {/* <div style={{width: '100%', height: '100%', position: 'relative'}}>
                        <Image
                            alt='Mountains'
                            src='/images/logo.png'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div> */}
                </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto wf-nav-list">
                            <Nav.Link href="#home">About WhipFlip</Nav.Link>
                            <Nav.Link href="#link">How it Works</Nav.Link>
                            <Nav.Link href="#link2">Support</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </div>
  )
}

export default Header