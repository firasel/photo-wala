import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div className='container'>
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">
                        <div className='navbarBrands d-flex align-items-center'>
                            <img src="https://i.ibb.co/TBDZwFB/camera-Logo-min-removebg-preview.png" alt="navbarImg"/>
                            <h3>PhotoWala</h3>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle style={{background:'#ffffff9e'}} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto navbar-items">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to=''>About</Nav.Link>
                            <Nav.Link as={Link} to='/dashboard'>Orders</Nav.Link>
                            <Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link>
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default NavBar;