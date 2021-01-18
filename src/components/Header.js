import React, { Component } from 'react';
import logo from './logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <Navbar bg="light">
                <Link to="/">
                    <Navbar.Brand href="#home">
                        <img
                            src={logo} 
                            style={logoStyle}  
                            className="d-inline-block align-top" 
                            alt="Pokemon logo" 
                        />
                    </Navbar.Brand>
                </Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-auto">
                    <Nav.Link to="/"><Link to="/">Home</Link></Nav.Link>
                    
                    <Nav.Link href="#features"><Link to="/types">Types</Link></Nav.Link>
                    
                    <Nav.Link><Link to="/about">About</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

const logoStyle = {
    width: '125px'
};

export default Header;
