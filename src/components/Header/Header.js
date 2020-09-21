import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import img from '../../Image/Logo.png';
import { Link } from '@material-ui/core';

const Header = (props) => {
    
    
    return (
   
        <div className="container">
            
            <>
              <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home"><img style={{width:'80px'}} src={img} alt=""/> </Navbar.Brand>
                <FormControl type="text" placeholder="Search" className=" w-50 mr-auto " />
                <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
               
                <Nav.Link href="/login">
                <Button variant=" bg-warning">Login</Button>
                </Nav.Link>             
                </Form>
            </Navbar>
            </>
             </div>
    );
};

export default Header;